import { notFound } from 'next/navigation';
import Link from 'next/link';
import { erasData, Era } from '@/data/eras';
import EraContent from './EraContent';

// Hàm tìm Era theo ID (đệ quy để tìm trong subEras)
function findEraById(eras: Era[], id: string): Era | null {
  for (const era of eras) {
    if (era.id === id) {
      return era;
    }
    if (era.subEras) {
      const found = findEraById(era.subEras, id);
      if (found) return found;
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EraPage({ params }: PageProps) {
  const { id } = await params;
  const era = findEraById(erasData, id);

  // Nếu không tìm thấy, hiển thị trang 404
  if (!era) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-amber-800 via-amber-600 to-orange-600 text-white py-10 shadow-2xl overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-5 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-all group hover:gap-3 gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/20"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Quay lại trang chủ</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl ring-2 ring-white/30">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{era.name}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <EraContent era={era} />
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

// Generate static params cho tất cả các era (để static export hoạt động)
export async function generateStaticParams() {
  const allEraIds: string[] = [];
  
  function collectIds(eras: Era[]) {
    for (const era of eras) {
      allEraIds.push(era.id);
      if (era.subEras) {
        collectIds(era.subEras);
      }
    }
  }
  
  collectIds(erasData);
  
  return allEraIds.map((id) => ({
    id,
  }));
}
