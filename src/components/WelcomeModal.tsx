'use client';

import { useState, useEffect } from 'react';
import { useAudio } from './AudioContext';

export default function WelcomeModal() {
  const [shouldShow, setShouldShow] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  const { enableAudio } = useAudio();

  useEffect(() => {
    setIsHydrated(true);
    // Kiểm tra sessionStorage ngay sau khi hydrate
    if (sessionStorage.getItem('hasShownWelcome')) {
      setShouldShow(false);
    }
  }, []);

  const handleStart = () => {
    enableAudio();
    sessionStorage.setItem('hasShownWelcome', 'true');
    setShouldShow(false);
  };

  // Chỉ ẩn hoàn toàn sau khi đã check sessionStorage
  if (isHydrated && !shouldShow) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 transform animate-scale-in border-4 border-amber-200 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full translate-x-20 translate-y-20"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-full p-6 shadow-xl ring-4 ring-amber-200 ring-offset-4">
              <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-amber-900">
            Chào Mừng Đến Với
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient">
            Triển Lãm Tiền Tệ Việt Nam
          </h1>
          
          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
          </div>
          
          {/* Description */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-200">
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Hãy bắt đầu hành trình khám phá lịch sử tiền tệ Việt Nam qua các thời kỳ. 
            </p>
            <p className="text-center font-semibold text-amber-800 mt-3 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
              Nhạc nền sẽ tự động phát để tăng trải nghiệm
            </p>
          </div>

          {/* Start button */}
          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white font-bold text-xl py-5 px-8 rounded-2xl hover:from-amber-700 hover:via-orange-600 hover:to-amber-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-1000"></div>
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform relative z-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10">Bắt Đầu Tham Quan</span>
          </button>

          {/* Footer note */}
          <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
            <span>💡</span>
            <span>Bạn có thể tắt/bật nhạc nền bất cứ lúc nào</span>
          </p>
        </div>
      </div>
    </div>
  );
}
