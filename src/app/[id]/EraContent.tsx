'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useAudio } from '@/components/AudioContext';
import { Era } from '@/data/eras';

interface EraContentProps {
  era: Era;
}

// Component đệ quy để hiển thị subEras
function SubEraSection({ subEra, level = 1 }: { subEra: Era; level?: number }) {
  const headingClass = level === 1 
    ? "text-3xl font-bold text-amber-800 mb-4" 
    : "text-2xl font-bold text-amber-700 mb-3 mt-6";
  
  const containerClass = level === 1
    ? "bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-amber-100"
    : "bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 mb-8 border border-amber-200";

  return (
    <div id={`section-${subEra.id}`} className={containerClass + " scroll-mt-28"}>
      {/* Badge cho thời kỳ con */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
          {level === 1 ? "Thời kỳ" : "Giai đoạn"}
        </span>
      </div>

      {/* Tên và mô tả thời kỳ con */}
      <h3 className={headingClass}>
        {subEra.name}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-8 border-l-4 border-amber-400 pl-4 italic">
        {subEra.description}
      </p>

      {/* Nếu có subEras cấp sâu hơn, hiển thị đệ quy */}
      {subEra.subEras && subEra.subEras.length > 0 && (
        <div className="space-y-6">
          {subEra.subEras.map((deepSubEra) => (
            <SubEraSection 
              key={deepSubEra.id} 
              subEra={deepSubEra} 
              level={level + 1} 
            />
          ))}
        </div>
      )}

      {/* Gallery ảnh của thời kỳ con (nếu có) */}
      {subEra.images && subEra.images.length > 0 && (
        <div className="mt-6">
          <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span>Hiện Vật</span>
            <span className="ml-2 px-3 py-1 bg-amber-500 text-white text-sm rounded-full">
              {subEra.images.length}
            </span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subEra.images.map((image) => (
              <div 
                key={image.id}
                id={`img-${encodeURIComponent(image.id)}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-amber-300 scroll-mt-28"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-50 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/images/${image.id}`}
                    alt={image.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient khi hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 bg-gradient-to-br from-white to-amber-50">
                  <h5 className="font-bold text-amber-900 mb-2 text-lg group-hover:text-amber-700 transition-colors">
                    {image.name}
                  </h5>
                  {image.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function EraContent({ era }: EraContentProps) {
  const { playAudio, isAudioEnabled, enableAudio } = useAudio();

  // Đảm bảo bật audio nếu người dùng đã từng tắt modal chào mừng
  useEffect(() => {
    if (era.musicUrl && !isAudioEnabled) {
      enableAudio();
    }
  }, [era.musicUrl, isAudioEnabled, enableAudio]);

  useEffect(() => {
    // Chỉ phát nhạc nếu era có musicUrl
    if (era.musicUrl) {
      const timer = setTimeout(() => {
        playAudio(era.musicUrl!);
      }, 100);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [era.musicUrl, playAudio, isAudioEnabled]);

  useEffect(() => {
    // Khi trang được mở với hash (từ Dòng chảy), cuộn mượt tới ảnh mục tiêu
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace('#', '');

    // Đợi DOM render đầy đủ rồi mới scroll
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Thêm hiệu ứng highlight ngắn để người dùng dễ nhận biết
        el.classList.add('ring-4', 'ring-amber-400');
        setTimeout(() => el.classList.remove('ring-4', 'ring-amber-400'), 1200);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [era.id]);

  return (
    <>
      {/* Thông tin chung về thời kỳ */}
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-2xl p-8 mb-12 border-2 border-amber-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-amber-900">Giới Thiệu</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-amber-500 pl-6 italic bg-white/50 p-4 rounded-r-xl">
          {era.description}
        </p>
      </div>

      {/* KỊCH BẢN 1: Có subEras - Hiển thị danh sách các thời kỳ con */}
      {era.subEras && era.subEras.length > 0 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-amber-900 mb-4 inline-block relative">
              Các giai đoạn trong thời kỳ
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </h2>
          </div>
          
          {era.subEras.map((subEra) => (
            <SubEraSection key={subEra.id} subEra={subEra} />
          ))}
        </div>
      )}

      {/* KỊCH BẢN 2: Có images trực tiếp */}
      {era.images && era.images.length > 0 && (
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-amber-200">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 flex items-center">
            <svg className="w-10 h-10 mr-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span>Các Đồng Tiền</span>
            <span className="ml-3 px-4 py-1 bg-amber-500 text-white text-lg rounded-full">
              {era.images.length}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {era.images.map((image) => (
              <div 
                key={image.id}
                id={`img-${encodeURIComponent(image.id)}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-amber-300 scroll-mt-28"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-50 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/images/${image.id}`}
                    alt={image.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 bg-gradient-to-br from-white to-amber-50">
                  <h5 className="font-bold text-amber-900 mb-2 text-lg group-hover:text-amber-700 transition-colors">
                    {image.name}
                  </h5>
                  {image.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
