'use client';

import { useAudio } from './AudioContext';

export default function MusicControl() {
  const { isAudioEnabled, isMuted, toggleMute } = useAudio();

  // Chỉ hiển thị nút khi đã enable audio
  if (!isAudioEnabled) return null;

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group"
      title={isMuted ? "Bật nhạc" : "Tắt nhạc"}
      aria-label={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
    >
      {isMuted ? (
        // Icon nhạc tắt
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ) : (
        // Icon nhạc bật
        <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
      )}
      
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
      </span>
    </button>
  );
}
