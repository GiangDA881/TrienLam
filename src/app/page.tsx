import Link from 'next/link';
import Image from 'next/image';
import MoneyFlow from '@/components/MoneyFlow';
import WelcomeModal from '@/components/WelcomeModal';
import { erasData } from '@/data/eras';

export default function Home() {
  // Hàm helper để lấy ảnh bìa đầu tiên từ Era
  const getCoverImage = (era: typeof erasData[0]) => {
    if (era.images && era.images.length > 0) {
      return era.images[0].id;
    }
    if (era.subEras && era.subEras.length > 0) {
      const firstSubEra = era.subEras[0];
      if (firstSubEra.images && firstSubEra.images.length > 0) {
        return firstSubEra.images[0].id;
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Modal Chào Mừng */}
      <WelcomeModal />
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-amber-800 via-amber-600 to-orange-600 text-white py-16 shadow-2xl overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl ring-4 ring-white/30">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 drop-shadow-lg">
            Triển Lãm Tiền Tệ Việt Nam
          </h1>
          <div className="flex justify-center mb-6">
            <div className="h-1.5 w-32 bg-white rounded-full shadow-lg"></div>
          </div>
          <p className="text-center text-amber-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Khám phá hành trình phát triển của tiền tệ Việt Nam qua các thời kỳ lịch sử
          </p>
        </div>
      </header>

      {/* Component Dòng Chảy Tiền Tệ */}
      <MoneyFlow />

      {/* Danh sách các thời kỳ */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          Các Thời Kỳ Lịch Sử
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erasData.map((era) => {
            const coverImage = getCoverImage(era);
            
            return (
              <Link
                key={era.id}
                href={`/${era.id}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent hover:border-amber-400">
                  {/* Ảnh bìa */}
                  <div className="relative h-72 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 overflow-hidden">
                    {coverImage ? (
                      <>
                        <Image
                          src={`/images/${coverImage}`}
                          alt={era.name}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full"></div>
                  </div>
                  
                  {/* Nội dung */}
                  <div className="p-8 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                    
                    <h3 className="text-3xl font-bold mb-3 text-amber-900 group-hover:text-amber-700 transition-colors flex items-center">
                      <span className="mr-3 text-amber-500 group-hover:scale-110 transition-transform">›</span>
                      {era.name}
                    </h3>
                    <p className="text-gray-700 line-clamp-3 leading-relaxed">
                      {era.description}
                    </p>
                    <div className="mt-4 flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                      <span>Khám phá thêm</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-amber-50 py-12 mt-20 overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-5 left-20 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-5 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-amber-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
          
          <p className="text-xl font-bold mb-2">© 2025 Triển Lãm Tiền Tệ Việt Nam</p>
          
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-24 bg-amber-400 rounded-full"></div>
          </div>
          
          <p className="text-amber-200 max-w-2xl mx-auto leading-relaxed">
            Bảo tồn và phát huy giá trị lịch sử văn hóa dân tộc
          </p>
          
          <div className="mt-6 flex justify-center gap-4 text-sm text-amber-300">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Lịch sử
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Văn hóa
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Di sản
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
