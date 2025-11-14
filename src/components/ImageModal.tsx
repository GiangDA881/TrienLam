'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageId: string;
  imageName: string;
  imageDescription?: string;
  onClose: () => void;
}

export default function ImageModal({ imageId, imageName, imageDescription, onClose }: ImageModalProps) {
  // Đóng modal khi nhấn ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Ngăn scroll body khi modal mở
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Ảnh */}
        <div className="relative w-full h-[70vh] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-8">
          <Image
            src={`/images/${imageId}`}
            alt={imageName}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            priority
          />
        </div>

        {/* Thông tin */}
        <div className="bg-white border-t-2 border-amber-200 p-6">
          <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center">
            <svg className="w-6 h-6 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            {imageName}
          </h3>
          {imageDescription && (
            <p className="text-gray-700 leading-relaxed border-l-4 border-amber-400 pl-4 italic bg-amber-50 p-3 rounded-r-xl">
              {imageDescription}
            </p>
          )}
          <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Nhấn ESC hoặc click bên ngoài để đóng</span>
          </p>
        </div>
      </div>
    </div>
  );
}
