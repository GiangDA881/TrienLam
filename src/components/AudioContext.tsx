'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface AudioContextType {
  isAudioEnabled: boolean;
  enableAudio: () => void;
  playAudio: (url: string) => void;
  stopAudio: () => void;
  toggleMute: () => void;
  isMuted: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrlRef = useRef<string>('');

  const enableAudio = () => {
    setIsAudioEnabled(true);
  };

  const playAudio = (url: string) => {
    if (!isAudioEnabled || isMuted) {
      // Lưu URL để có thể phát lại khi unmute
      currentUrlRef.current = url;
      return;
    }
    
    // Dừng audio hiện tại nếu có
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Lưu URL hiện tại
    currentUrlRef.current = url;

    // Tạo audio mới
    const audio = new Audio(url);
    audio.loop = true;
    
    // Lưu reference ngay để có thể cleanup
    audioRef.current = audio;
    
    // Xử lý lỗi load
    audio.addEventListener('error', () => {
      console.warn(`⚠️ Không thể phát nhạc: ${url}`);
      console.warn('💡 Hãy thêm file nhạc vào thư mục public/music/');
    });
    
    // Play với error handling
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // Bỏ qua lỗi AbortError khi component unmount
        if (err.name !== 'AbortError') {
          console.warn(`⚠️ Lỗi phát nhạc:`, err.message);
        }
      });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (newMutedState) {
      // Đang bật → sẽ tắt
      stopAudio();
    } else {
      // Đang tắt → sẽ bật lại
      // Phát lại nhạc cuối cùng nếu có
      if (currentUrlRef.current) {
        playAudio(currentUrlRef.current);
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isAudioEnabled, enableAudio, playAudio, stopAudio, toggleMute, isMuted }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
