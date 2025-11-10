'use client';

import { allCurrencyImages, imageIdToTarget } from '@/data/eras';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MoneyFlow() {
  // Nhân đôi mảng để tạo hiệu ứng vòng lặp liền mạch
  const duplicatedImages = [...allCurrencyImages, ...allCurrencyImages];
  const router = useRouter();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-12 mb-16">
      <div className="absolute inset-0 bg-[url('/globe.svg')] opacity-5"></div>
      
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">
          Dòng Chảy Tiền Tệ Việt Nam
        </h2>
        
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
                onClick={() => {
                  const target = imageIdToTarget[image.id];
                  if (target) {
                    const hash = target.sectionId ?? `img-${encodeURIComponent(image.id)}`;
                    router.push(`/${target.eraId}#${hash}`);
                  }
                }}
              >
                <div className="relative w-48 h-48 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105 p-4 flex items-center justify-center">
                  <Image
                    src={`/images/${image.id}`}
                    alt={image.name}
                    fill
                    className="object-contain p-2"
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-center mt-3 font-medium text-amber-900 text-sm group-hover:text-amber-700">
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
