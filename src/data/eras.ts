// src/data/eras.ts

// Định nghĩa các interfaces
export interface CurrencyImage {
  id: string; // Tên file ảnh, ví dụ: "Nhà Đinh 1.jpg"
  name: string; // Tên đồng tiền
  description?: string; // Mô tả chi tiết
}

export interface Era {
  id: string; // ID để làm URL (ví dụ: "phong-kien")
  name: string; // Tên thời kỳ (ví dụ: "Thời Phong Kiến")
  description: string; // Mô tả đầy đủ cho thời kỳ này
  musicUrl?: string; // Đường dẫn tới file nhạc (optional cho subEras)
  subEras?: Era[]; // Danh sách CÁC THỜI KỲ CON (nếu có)
  images?: CurrencyImage[]; // Hoặc, danh sách CÁC ẢNH TIỀN (nếu không có)
}

// ========= DỮ LIỆU ĐÃ CHUYỂN ĐỔI =========
export const erasData: Era[] = [
  // --- THỜI KỲ 1: PHONG KIẾN ---
  {
    id: "phong-kien",
    name: "Thời phong kiến (970–1884)",
    description: "Giai đoạn từ thế kỷ 10 đến cuối thế kỷ 19, bao gồm các triều đại phong kiến Việt Nam với hệ thống tiền tệ đặc trưng bằng tiền đồng, tiền kẽm.",
    musicUrl: "/music/Thời phong kiến.mp3",
    subEras: [
      {
        id: "nha-dinh",
        name: "Nhà Đinh (970)",
        description: "Triều đại đầu tiên của nhà nước phong kiến độc lập Việt Nam, do Đinh Bộ Lĩnh sáng lập. Đồng tiền đầu tiên 'Thái Bình Hưng Bảo' ra đời, khẳng định nền độc lập tự chủ.",
        images: [
          {
            id: "Nhà Đinh 1.jpg",
            name: "Thái Bình Hưng Bảo",
            description: "(太平興寶) là tên gọi đồng tiền đầu tiên của Việt Nam do nhà Đinh là một triều đại của người Việt cho đúc bắt đầu từ năm 970. Tiền Thái Bình hưng bảo ra đời góp phần khẳng định nền độc lập tự chủ của dân tộc Việt Nam trên các lĩnh vực kinh tế, chính trị, ngoại giao, văn hóa mà Đinh Tiên Hoàng đã xác lập"
          },
          {
            id: "Nhà Đinh 2.jpg",
            name: "Thái Bình Hưng Bảo (Loại 2)",
            description: "Các nhà khảo cổ học đã phát hiện ra rằng đồng tiền Thái Bình Hưng Bảo có ba loại khác nhau, với đường kính khoảng 22 mm và có lỗ vuông ở giữa. Mặt sau (lưng) của đồng tiền có chữ Đinh"
          },
          {
            id: "Nhà Đinh 3.jpg",
            name: "Ý nghĩa Thái Bình Hưng Bảo",
            description: "Trên mặt đồng tiền ghi bốn chữ Hán “Thái Bình Hưng Bảo”-“太平興寶” đọc chéo,tuần tự từ trên xuống dưới,từ phải sang trái.Trong đó,hai chữ “Thái Bình”-“太平” là chỉ niên hiệu vua,với hàm ý thể hiện ước muốn thiên hạ được thái bình,yên ổn. Còn hai chữ “Hưng Bảo”-“興寶” với chữ Hưng trên đồng tiền đi đôi với chữ Bảo đã nói lên mong muốn cho đất nước,xã hội,kinh tế được hưng thịnh,phát triển"
          },
          {
            id: "Nhà Đinh 4.jpg",
            name: "Tranh luận 'Đại' hay 'Thái'",
            description: "Có tranh luận về việc chữ “大” (Đại) hay “太” (Thái) mới là chữ chính xác trên tiền — mặc dù niên hiệu là “Thái Bình”. Nhưng chữ “Thái”-“太” trên tiền lại không có nét chấm hay phẩy dưới chữ “Đại”- “大” nên việc đọc tên tiền là Thái Bình hay Đại Bình cho đến nay vẫn còn nhiều tranh cãi"
          }
        ]
      },
      {
        id: "nha-tien-le",
        name: "Nhà Tiền Lê (984)",
        description: "Triều đại thứ hai, do Lê Hoàn sáng lập. Cho đúc tiền 'Thiên Phúc Trấn Bảo', được coi là loại tiền thứ hai của người Việt.",
        images: [
          {
            id: "Nhà Tiền Lê 1.jpg",
            name: "Thiên Phúc Trấn Bảo",
            description: "Tiền cổ Thiên Phúc Trấn Bảo là loại tiền được cho đúc và lưu hành dưới đời vua Lê Đại Hành triều đại nhà Tiền Lê.Đây được coi là loại tiền thứ hai của người Việt sau loại tiền Thái Bình Hưng Bảo do nhà Đinh cho đúc trước đó."
          },
          {
            id: "Nhà Tiền Lê 2.jpg",
            name: "Thiên Phúc Trấn Bảo (Hình dạng)",
            description: "Tiền Thiên Phúc Trấn Bảo-天福鎮寶 được đúc và lưu hành dưới triều đại Tiền Lê có dạng hình tròn lỗ vuông thể hiện quan niệm “trời tròn đất vuông” của con người khi xưa"
          },
          {
            id: "Nhà Tiền Lê 3.jpg",
            name: "Ý nghĩa Thiên Phúc Trấn Bảo",
            description: "Mặt trước của đồng tiền có ghi bốn chữ “Thiên Phúc Trấn Bảo”-“天福鎮寶” được đọc chéo,tuần tự từ trên xuống dưới,từ phải qua trái.Trong đó hai chữ “Thiên Phúc”-“天福” là chỉ niên hiệu của nhà vua với ý nghĩa là “Trời ban phúc”.Hai chữ còn lại “Trấn Bảo”-“鎮寶” dùng để chỉ loại tiền"
          }
        ]
      },
      {
        id: "nha-ly",
        name: "Nhà Lý (1010)",
        description: "Triều đại thịnh vượng, chuyển đô về Thăng Long. Vua Lý Thái Tổ cho đúc tiền 'Thuận Thiên Đại Bảo' để phục vụ giao thương và thể hiện sự tồn tại của vương triều.",
        images: [
          {
            id: "Nhà Lý 1.jpg",
            name: "Thuận Thiên Đại Bảo",
            description: "Khi lên ngôi vua Lý Thái Tổ đã cho thực hiện một trong những chính sách về kinh tế đó chính là đúc tiền phục vụ cho đời sống buôn bán,giao thương trong nước cũng như để thể hiện sự tồn tại của vương triều cho ngàn đời hậu thế.Tên tiền là “Thuận Thiên Đại Bảo”-“順 天 大 寶”"
          },
          {
            id: "Nhà Lý 2.jpg",
            name: "Thuận Thiên Đại Bảo (Hình dạng)",
            description: "Tiền đồng do vua Lý Thái Tổ cho đúc có dạng hình tròn,lỗ vuông nhằm biểu tượng cho nhân quan vũ trụ của con người khi ấy là “trời tròn đất vuông”.Trên mặt trước của đồng tiền có ghi bốn chữ Hán đối xứng cân chỉnh ở các cạnh của lỗ vuông,đọc chéo"
          },
          {
            id: "Nhà Lý 3.jpg",
            name: "Ý nghĩa Thuận Thiên Đại Bảo",
            description: "Hai chữ “Thuận Thiên”-“順 天” là niên hiệu của vua,con hai chữ”大 寶” là thể hiện đồng tiền có giá trị to"
          }
        ]
      },
      {
        id: "nha-ho",
        name: "Nhà Hồ (1396)",
        description: "'Thông Bảo Hội Sao' là tiền giấy đầu tiên của Việt Nam, do Hồ Quý Ly ban hành vào năm 1396. Triều đình ra lệnh thu hồi toàn bộ tiền đồng để tập trung kim loại đúc vũ khí. Tuy nhiên, tiền giấy không được người dân tin dùng và chính sách này đã thất bại. Hiện không còn tờ tiền gốc nào sót lại.",
        images: [
          {
            id: "Thông Bảo Hội Sao vẽ lại.jpg",
            name: "Thông Bảo Hội Sao (Vẽ lại)",
            description: "Dựa trên các ghi chép lịch sử, các nhà nghiên cứu đã phác họa lại tiền 'Thông Bảo Hội Sao' với các họa tiết như rêu, sóng, mây, rùa, lân, phượng, rồng để phân biệt mệnh giá."
          },
          {
            id: "Thông Bảo Hội Sao vẽ lại 2.jpg",
            name: "Thông Bảo Hội Sao (Vẽ lại 2)",
            description: "Một phác họa khác về tiền giấy thời nhà Hồ."
          }
        ]
      },
      {
        id: "hau-le-mac",
        name: "Hậu Lê – Mạc – Lê Trung Hưng",
        description: "Thời kỳ này chứng kiến sự lưu hành của nhiều loại tiền, nổi bật là 'Hồng Đức Thông Bảo' dưới thời Lê Thánh Tông thịnh trị, và 'Cảnh Hưng Thông Bảo' dưới thời Lê Hiển Tông.",
        images: [
          {
            id: "Cảnh Hưng Thông Bảo.jpg",
            name: "Cảnh Hưng Thông Bảo",
            description: "'Cảnh Hưng Thông Bảo' (景興通寶) là loại tiền đồng được đúc và lưu hành phổ biến dưới thời vua Lê Hiển Tông (1740–1786). Đây là loại tiền kim loại phổ biến nhất trong thời kỳ này."
          },
          {
            id: "Hồng Đức Thông Bảo (洪德通寶).jpg",
            name: "Hồng Đức Thông Bảo",
            description: "'Hồng Đức Thông Bảo' (洪德通寳) là đồng tiền được đúc dưới thời vua Lê Thánh Tông (1470-1497), giai đoạn thịnh trị nhất của triều Hậu Lê. Tiền được đánh giá cao về kỹ thuật đúc và chất lượng đồng."
          }
        ]
      },
      {
        id: "tay-son",
        name: "Tây Sơn",
        description: "Mục đích: Khẳng định chính quyền mới, thay thế tiền Lê – Nguyễn trước đó. Chất liệu: Chủ yếu đồng, ít kẽm. Hình dạng: Tròn, lỗ vuông giữa; đúc thủ công. Niên hiệu: Thái Đức thông bảo, Quang Trung thông bảo/đại bảo, Cảnh Thịnh thông bảo/đại bảo, Bảo Hưng thông bảo.",
        images: [
          {
            id: "Tây Sơn 2.jpg",
            name: "Tiền Tây Sơn (mẫu 1)",
            description: "Đồng tiền được đúc dưới triều đại Tây Sơn, nét chữ khắc nổi."
          },
          {
            id: "Tây Sơn 1.jpg",
            name: "Tiền Tây Sơn (mẫu 2)",
            description: "Kích thước tiền Tây Sơn thường không đều do đúc thủ công."
          }
        ]
      },
      {
        id: "nha-nguyen",
        name: "Nhà Nguyễn",
        description: "Hoàn cảnh: Vua cuối cùng triều Nguyễn, phát hành tiền tượng trưng song song với tiền Đông Dương. Chất liệu: Có đủ đồng – bạc – vàng. 'Bảo Đại thông bảo' (đồng) để lưu hành; 'Bảo Đại bảo giám' (bạc, vàng) dùng trong lễ nghi. Đây là đồng tiền phong kiến cuối cùng trước khi Việt Nam chuyển sang thời kỳ hiện đại.",
        images: [
          {
            id: "Nguyễn.jpg",
            name: "Bảo Đại Thông Bảo",
            description: "Đồng tiền lưu hành cuối cùng của triều Nguyễn, được dập máy tinh xảo."
          },
          {
            id: "Nhà Nguyễn 2.jpg",
            name: "Bảo Đại Bảo Giám",
            description: "Tiền bằng bạc hoặc vàng, dùng trong lễ nghi, thưởng công, có bản trang trí rồng phượng."
          }
        ]
      }
    ]
  },
  // --- THỜI KỲ 2: PHÁP THUỘC ---
  {
    id: "phap-thuoc",
    name: "Thời Pháp thuộc (1885–1954)",
    description: "Giai đoạn 1858-1954, Việt Nam bị Pháp xâm lược và đô hộ. Hệ thống tiền tệ chịu ảnh hưởng mạnh mẽ từ Pháp với đồng Piastre Đông Dương (Đồng Đông Dương).",
    musicUrl: "/music/Thời Pháp thuộc (1885–1954).mp3",
    subEras: [
      {
        id: "phap-thuoc-1885-1906",
        name: "Giai đoạn 1885–1906",
        description: "Tên tiền: Piastre de Commerce. Năm 1885, đồng piastre bạc đầu tiên lưu hành chính thức, thay thế tiền địa phương. Tiền bạc 0.900, hình Nữ thần Tự do, tượng trưng cho Cộng hòa Pháp. Song song có tiền đồng, cent (đục lỗ, ghi Hán – Pháp – Quốc ngữ). Mục đích: thống nhất hệ tiền tệ thuộc địa.",
        images: [
          {
            id: "Dong bac Dong Duong 1900.jpg",
            name: "Đồng bạc Đông Dương 1900",
            description: "Đồng Piastre de Commerce bằng bạc, nặng 27,2156 g, hình Nữ thần Tự do."
          }
        ]
      },
      {
        id: "phap-thuoc-1906-1930",
        name: "Giai đoạn 1906-1930",
        description: "Lần đầu xuất hiện tiền giấy quy mô lớn, in tại Paris hoặc Hà Nội. Trên tiền có hình ba thiếu nữ Đông Dương (Việt, Lào, Khmer). Tiền giấy và tiền kim loại cùng lưu hành song song. Chữ trên tiền bằng Pháp, Hán, Quốc ngữ, Khmer, Lào. Giai đoạn vàng của đồng Đông Dương.",
        images: [
          {
            id: "Tien giay 1906-1930.png",
            name: "Tiền giấy 1906-1930",
            description: "Tiền giấy mệnh giá 1 Piastre, có hình ba thiếu nữ Đông Dương."
          }
        ]
      },
      {
        id: "phap-thuoc-1930-1945",
        name: "Giai đoạn 1930-1945",
        description: "Ảnh hưởng khủng hoảng kinh tế 1929–1933, Pháp giảm độ bạc, thay bằng niken, đồng, nhôm. 1940–1945, Nhật chiếm Đông Dương, cho lưu hành tiền quân phiệt Nhật song song. Giai đoạn suy yếu của đồng Đông Dương, lạm phát tăng.",
        images: [
          {
            id: "Tien giay 1906-1930.png",
            name: "Tiền giấy 1930-1945",
            description: "Tiền giấy vẫn được lưu hành trong giai đoạn này, nhưng giá trị suy yếu."
          }
        ]
      },
      {
        id: "phap-thuoc-1945-1954",
        name: "Giai đoạn 1945-1954 (Song hành)",
        description: "Tên tiền: Piastre Đông Dương (Pháp) và Giấy bạc Việt Minh. Vùng Pháp kiểm soát dùng Piastre. Vùng kháng chiến dùng 'Giấy bạc Cụ Hồ'. Sau Hiệp định Genève 1954, hệ thống piastre Đông Dương chấm dứt, thay bằng tiền quốc gia riêng.",
        images: [
          {
            id: "1945-1954 song hanh.jpg",
            name: "Tiền tệ song hành 1945-1954",
            description: "Giai đoạn cuối cùng, đánh dấu sự sụp đổ của hệ thống tiền thuộc địa Pháp và sự ra đời của tiền tệ độc lập."
          }
        ]
      }
    ]
  },
  // --- THỜI KỲ 3: SAU CMT8 ---
  {
    id: "sau-cach-mang-thang-tam",
    name: "Sau Cách mạng tháng Tám (1945–1975)",
    description: "Giai đoạn sau khi giành độc lập, Việt Nam Dân chủ Cộng hòa bắt đầu xây dựng nền tiền tệ riêng của mình. Sau 1954, đất nước chia cắt, dẫn đến hai hệ thống tiền tệ song song.",
    musicUrl: "/music/Sau Cách mạng tháng Tám (1945–1975).mp3",
    subEras: [
      {
        id: "giai-doan-1945-1951",
        name: "Giai đoạn 1945–1951 (Giấy bạc Cụ Hồ)",
        description: "Ngày phát hành đầu tiên: 31/1/1946.Cơ quan phát hành: Bộ Tài chính Việt Nam Dân chủ Cộng hòa. Tên gọi thường dùng: Giấy bạc Cụ Hồ (vì có in chân dung Chủ tịch Hồ Chí Minh). Chất liệu: Giấy, in thủ công tại chiến khu (chủ yếu là Việt Bắc). Mệnh giá: 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng. Mục đích: Thay thế tiền Đông Dương của Pháp, gây quỹ cho chính quyền kháng chiến, tạo niềm tin vào nền tài chính độc lập.",
        images: [
          {
            "id": "Giấy bạc 1 đồng (1946).jpg",
            "name": "Giấy bạc 1 đồng (1946)",
            "description": "Phát hành năm 1946, là một trong những tờ bạc đầu tiên của nước Việt Nam Dân chủ Cộng hoà. Mặt trước in chân dung Hồ Chí Minh cùng dòng chữ “Việt Nam Dân chủ Cộng hoà” và mệnh giá “Một đồng”. Mặt sau là hoa văn trang trí dân tộc, thể hiện tinh thần tự lực và bản sắc dân tộc."
          },
          {
            "id": "Giấy bạc 5 đồng (1946).jpg",
            "name": "Giấy bạc 5 đồng (1946)",
            "description": "Phát hành năm 1946, mệnh giá 5 đồng trong loạt tiền đầu của Nhà nước cách mạng. Mặt trước in chân dung Hồ Chí Minh, dòng chữ “Việt Nam Dân chủ Cộng hoà” và mệnh giá “Năm đồng”. Mặt sau trang trí hoa văn truyền thống, biểu trưng cho tinh thần đoàn kết dân tộc."
          },
          {
            "id": "Giấy bạc 10 đồng (1946).jpg",
            "name": "Giấy bạc 10 đồng (1946)",
            "description": "Phát hành năm 1946 (hoặc đầu giai đoạn 1947) trong hệ thống tiền tệ đầu tiên của Việt Nam. Mệnh giá 10 đồng. Mặt trước in chân dung Hồ Chí Minh và mệnh giá “Mười đồng”. Mặt sau được trang trí hoa văn dân tộc, biểu tượng của nền tài chính độc lập."
          },
          {
            "id": "Giấy bạc 20 đồng (1946).jpg",
            "name": "Giấy bạc 20 đồng (1946)",
            "description": "Phát hành năm 1946, mệnh giá 20 đồng trong hệ tiền mới. Mặt trước in chân dung Hồ Chí Minh cùng mệnh giá “Hai mươi đồng” và dòng chữ “Việt Nam Dân chủ Cộng hoà”. Mặt sau là hoa văn trang trí dân tộc, thể hiện tinh thần tự cường của đất nước."
          },
          {
            "id": "Giấy bạc 50 đồng (1946).jpg",
            "name": "Giấy bạc 50 đồng (1946)",
            "description": "Phát hành năm 1946, mệnh giá 50 đồng – một trong những mệnh giá lớn trong loạt tiền đầu. Mặt trước in chân dung Hồ Chí Minh và mệnh giá “Năm mươi đồng”, mặt sau với hoa văn trang trí dân tộc, thể hiện ý chí độc lập tài chính của Việt Nam."
          },
          {
            "id": "Giấy bạc 100 đồng (1946).jpg",
            "name": "Giấy bạc 100 đồng (1946)",
            "description": "Phát hành năm 1946, mệnh giá 100 đồng – một trong những tờ quan trọng nhằm khẳng định chủ quyền tiền tệ non trẻ. Mặt trước in chân dung Hồ Chí Minh, dòng chữ “Việt Nam Dân chủ Cộng hoà” và mệnh giá “Một trăm đồng”. Mặt sau là hoa văn trang trí dân tộc, thể hiện tinh thần tự lực và bản sắc dân tộc."
          }
        ]
      },
      {
        id: "giai-doan-1951-1954",
        name: "Giai đoạn 1951-1954 (Ngân hàng Quốc gia VN)",
        description: "Bối cảnh: Đến năm 1951, cuộc kháng chiến chống Pháp bước vào giai đoạn phát triển. Cần có một cơ quan tài chính – ngân hàng thống nhất, có chức năng phát hành tiền, huy động vốn và quản lý tài chính cho cả nước. Vì vậy, ngày 6/5/1951, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Ngân hàng Quốc gia Việt Nam. Đặc điểm của tiền Ngân hàng Quốc gia Việt Nam (1951–1954): Cơ quan phát hành: Ngân hàng Quốc gia Việt Nam. Đơn vị tiền tệ: Đồng Việt Nam. Chất liệu: Giấy in kỹ hơn, màu sắc đa dạng hơn so với giai đoạn 1946. Các mệnh giá: 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng, 200 đồng, 500 đồng, 1000 đồng, 5000 đồng. Hình ảnh trên tiền: Hồ Chí Minh, Quốc huy, công nhân – nông dân – bộ đội, cảnh sản xuất, kháng chiến. Khu vực sử dụng: Chủ yếu lưu hành ở vùng tự do kháng chiến (miền Bắc), ở vùng tạm chiếm của Pháp vẫn dùng đồng Đông Dương. Kỹ thuật in: Một số bản in được thực hiện ở Trung Quốc do điều kiện kháng chiến. Màu sắc và chất lượng in cải thiện đáng kể so với giai đoạn đầu.",
        images: [
          {
            id: "10 đồng (1951).jpg",
            name: "10 đồng (1951)",
            description: "Tờ tiền được in thủ công trong điều kiện chiến tranh, chủ yếu trên giấy thủ công hoặc giấy dó, với tông màu nâu đỏ hoặc xanh lam. Mặt trước in chân dung Chủ tịch Hồ Chí Minh cùng mệnh giá “Mười đồng”, biểu tượng cho niềm tin của nhân dân vào chính quyền cách mạng. Mặt sau trang trí hoa văn dân tộc và dòng chữ “Ngân hàng Quốc gia Việt Nam”."
          },
          {
            id: "20 đồng (1951).jpg",
            name: "20 đồng (1951)",
            description: "Mặt trước in chân dung Chủ tịch Hồ Chí Minh, mệnh giá “Hai mươi đồng”, cùng dòng chữ “Ngân hàng Quốc gia Việt Nam”. Mặt sau trang trí hoa văn truyền thống, biểu tượng cho tinh thần lao động và lòng yêu nước."
          },
          {
            id: "50 đồng (1951).jpg",
            name: "50 đồng (1951)",
            description: "Mặt trước in chân dung Chủ tịch Hồ Chí Minh cùng dòng chữ “Ngân hàng Quốc gia Việt Nam” và mệnh giá “Năm mươi đồng”. Mặt sau có hoa văn dân tộc hoặc hình ảnh biểu trưng cho công – nông – binh, thể hiện tinh thần đoàn kết toàn dân."
          },
          {
            id: "100 đồng (1951).jpg",
            name: "100 đồng (1951)",
            description: "Tờ tiền được in trên giấy thủ công, thiết kế mang gam màu đỏ hoặc tím, nổi bật với chân dung Chủ tịch Hồ Chí Minh ở mặt trước, cùng dòng chữ “Ngân hàng Quốc gia Việt Nam” và mệnh giá “Một trăm đồng”. Mặt sau trang trí hoa văn dân tộc hoặc hình ảnh sản xuất kháng chiến, tượng trưng cho tinh thần lao động và đoàn kết của nhân dân."
          },
          {
            "id": "Giấy bạc 200 đồng (1951).jpg",
            "name": "200 đồng (1951)",
            "description": "Hai trăm đồng – mệnh giá lớn trong loạt tiền của Ngân hàng Quốc gia. Mặt trước in hình Hồ Chí Minh và hình bộ đội đang tập luyện; mệnh giá “Hai trăm đồng”. Mặt sau khắc hình người dân gánh thóc hoặc sản xuất, cùng dòng chữ “Ngân hàng Quốc gia Việt Nam”, biểu trưng cho đoàn kết lao động và ý chí kinh tế quốc gia."
          },
          {
            id: "500 đồng (1951).jpg",
            name: "500 đồng (1951)",
            description: "Mặt trước in chân dung Chủ tịch Hồ Chí Minh, mệnh giá “Năm trăm đồng” và dòng chữ “Ngân hàng Quốc gia Việt Nam”. Mặt sau trang trí hoa văn truyền thống hoặc hình ảnh công – nông – binh, biểu tượng cho sức mạnh đoàn kết dân tộc trong kháng chiến."
          },
          {
            "id": "1000 đồng (1951).jpg",
            "name": "1000 đồng (1951)",
            "description": "Tờ tiền mệnh giá Một nghìn đồng phát hành năm 1951. Mặt trước in chân dung Hồ Chí Minh cùng dòng chữ “Việt Nam Dân chủ Cộng hòa” và mệnh giá “Một nghìn đồng”. Mặt sau là hình ảnh công – nông – binh đang làm nhiệm vụ, cùng dòng chữ “Ngân hàng Quốc gia Việt Nam”."
          },
          {
            "id": "5000 đồng (1953).jpg",
            "name": "5000 đồng (1953)",
            "description": "Tờ tiền mệnh giá Năm nghìn đồng phát hành khoảng năm 1953. Mặt trước in chân dung Hồ Chí Minh và mệnh giá “Năm nghìn đồng”. Mặt sau in hình pháo cao xạ hoặc cảnh phòng không – biểu tượng kháng chiến – cùng dòng chữ “Ngân hàng Quốc gia Việt Nam”."
          }
        ]
      },
      {
        id: "giai-doan-1954-1975",
        name: "Giai đoạn 1954–1975 (Chia cắt)",
        description: "Sau Hiệp định Genève 1954, Việt Nam tạm thời chia cắt thành hai miền, dẫn đến sự tồn tại song song của hai hệ thống tiền tệ độc lập.",
        subEras: [
          {
            id: "mien-bac-1954-1975",
            name: "Miền Bắc (Việt Nam Dân chủ Cộng hòa)",
            description: "Cơ quan phát hành: Ngân hàng Quốc gia Việt Nam (sau 1960 là Ngân hàng Nhà nước Việt Nam). Lưu hành toàn miền Bắc. Hình ảnh: Chủ tịch Hồ Chí Minh, Quốc huy, cảnh sản xuất công – nông nghiệp, biểu trưng cho công cuộc xây dựng CNXH.",
            images: [
              {
                id: "Tờ 1 hào 1958.jpg",
                name: "Tờ 1 hào (1958)",
                description: "Tiền giấy mệnh giá 1 hào phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 2 Hào năm 1958.jpg",
                name: "Tờ 2 hào (1958)",
                description: "Tiền giấy mệnh giá 2 hào phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 5 Hào năm 1958.jpg",
                name: "Tờ 5 hào (1958)",
                description: "Tiền giấy mệnh giá 5 hào phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 1 Đồng Năm 1958.jpg",
                name: "Tờ 1 Đồng (1958)",
                description: "Tiền giấy mệnh giá 1 đồng phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 2 Đồng Năm 1958.jpg",
                name: "Tờ 2 Đồng (1958)",
                description: "Tiền giấy mệnh giá 2 đồng phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 5 Đồng Năm 1958.jpg",
                name: "Tờ 5 Đồng (1958)",
                description: "Tiền giấy mệnh giá 5 đồng phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "Tờ 10 Đồng Năm 1958.jpg",
                name: "Tờ 10 Đồng (1958)",
                description: "Tiền giấy mệnh giá 10 đồng phát hành năm 1958 tại Miền Bắc."
              },
              {
                id: "50dongluuniemnhnn2001.webp",
                name: "Tiền Miền Bắc (mẫu 1)",
                description: "Đồng 50 đồng lưu niệm."
              },
              {
                id: "200-dong-1970.webp",
                name: "200 đồng (1970)",
                description: "Tiền phát hành tại Miền Bắc."
              },
              {
                id: "500-dong-1970.webp",
                name: "500 đồng (1970)",
                description: "Tiền phát hành tại Miền Bắc."
              },
              {
                id: "bo-tien-giay-nam-1951-do-ngan-hang-quoc-gia-viet-nam-tien-than-cua-ngan-hang-nha-nuoc-hien-nay-phat-hanh-10385078.jpg",
                name: "Tiền Miền Bắc (mẫu 2)",
                description: "Các mẫu tiền giấy của Ngân hàng Quốc gia Việt Nam."
              },
              {
                id: "mot-dong-tien-giai-doan-1959-1978-10402569.jpg",
                name: "Tiền 1 đồng (1959-1978)",
                description: "Tiền phát hành sau cải cách tiền tệ 1959."
              },
              {
                id: "vietnam-50-dong-1985-p97.webp",
                name: "Tiền 50 đồng",
                description: "Tiền phát hành tại Miền Bắc."
              }
            ]
          },
          {
            id: "mien-nam-1955-1975",
            name: "Miền Nam (Việt Nam Cộng hòa)",
            description: "Tên tiền: Đồng Việt Nam (Đồng VNCH). Phát hành 22/9/1955, thay đồng Đông Dương. Cơ quan phát hành: Ngân hàng Quốc gia Việt Nam (Sài Gòn). In tại Mỹ, Anh, Nhật. Hình ảnh: Các nhân vật lịch sử (Ngô Quyền, Trần Hưng Đạo...), danh lam thắng cảnh (Chợ Bến Thành, cầu Trường Tiền...).",
            images: [
              {
                id: "tien-viet-nam-cong-hoa-2.jpg",
                name: "Tiền Việt Nam Cộng hòa (mẫu 1)",
                description: "Mẫu tiền giấy của Việt Nam Cộng hòa."
              },
              {
                id: "20140731_151252.jpg",
                name: "Tiền Việt Nam Cộng hòa (mẫu 2)",
                description: "Mẫu tiền giấy của Việt Nam Cộng hòa."
              },
              {
                id: "z560502567814974d8823de8a67e853e84e960ec232224-4852.jpg",
                name: "Tiền Việt Nam Cộng hòa (mẫu 3)",
                description: "Mẫu tiền giấy của Việt Nam Cộng hòa."
              }
            ]
          }
        ]
      }
    ]
  },
  // --- THỜI KỲ 4: THỐNG NHẤT & ĐỔI MỚI ---
  {
    id: "thong-nhat-doi-moi",
    name: "Thời kì thống nhất và đổi mới (1975 - nay)",
    description: "Sau khi đất nước thống nhất, Việt Nam tiến hành hợp nhất tiền tệ và trải qua nhiều cuộc cải cách để ổn định và phát triển kinh tế, từ tiền cotton đến tiền polymer hiện đại.",
    musicUrl: "/music/Thời kì thống nhất và đổi mới (1975 - nay).mp3",
    subEras: [
      {
        id: "giai-doan-1975-1978",
        name: "Giai đoạn Sau Thống Nhất (1975–1978)",
        description: "Quá trình hợp nhất hệ thống tiền tệ. Bước 1 (1975): Phát hành 'tiền Giải phóng' ở miền Nam để thay thế tiền VNCH. Bước 2 (1978): Đổi tiền quy mô lớn trên cả nước, thu hồi tiền miền Bắc và 'tiền Giải phóng', thay bằng 'Đồng Thống nhất'.",
        images: [
          {
            id: "Tiền Giải Phóng.jpg",
            name: "Tiền Giải Phóng",
            description: "Tiền do Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam phát hành, dùng làm bước đệm chuyển tiếp ở miền Nam."
          },
          {
            id: "Tờ 5 Hào 1976.jpg",
            name: "Tờ 5 Hào (1976)",
            description: "Tiền giấy mệnh giá 5 hào phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          },
          {
            id: "Tờ 1 Đồng 1976.jpg",
            name: "Tờ 1 Đồng (1976)",
            description: "Tiền giấy mệnh giá 1 đồng phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          },

          {
            id: "Tờ 5 Đồng 1976.jpg",
            name: "Tờ 5 Đồng (1976)",
            description: "Tiền giấy mệnh giá 5 đồng phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          },
          {
            id: "Tờ 10 Đồng 1976.jpg",
            name: "Tờ 10 Đồng (1976)",
            description: "Tiền giấy mệnh giá 10 đồng phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          },
          {
            id: "Tờ 20 Đồng 1976.jpg",
            name: "Tờ 20 Đồng (1976)",
            description: "Tiền giấy mệnh giá 20 đồng phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          },
          {
            id: "Tờ 50 Đồng 1976.jpg",
            name: "Tờ 50 Đồng (1976)",
            description: "Tiền giấy mệnh giá 50 đồng phát hành năm 1976 trong giai đoạn chuyển tiếp sau thống nhất."
          }
        ]
      },
      {
        id: "giai-doan-1985-1988",
        name: "Cải cách 'Giá - Lương - Tiền' (1985)",
        description: "Bối cảnh: Lạm phát phi mã. Nhà nước thực hiện cải cách 'Giá - Lương - Tiền', đổi tiền 10 đồng cũ = 1 đồng mới. Mục đích 'xóa bớt số 0', ổn định tâm lý. Kết quả: Thất bại, gây ra siêu lạm phát nghiêm trọng hơn. Đây là lý do thúc đẩy công cuộc Đổi Mới 1986.",
        images: [
          {
            id: "Tờ 5 Hào 1985.jpg",
            name: "Tờ 5 Hào (1985)",
            description: "Tiền giấy mệnh giá 5 hào phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 1 Đồng 1985.jpg",
            name: "Tờ 1 Đồng (1985)",
            description: "Tiền giấy mệnh giá 1 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 2 Đồng 1985.jpg",
            name: "Tờ 2 Đồng (1985)",
            description: "Tiền giấy mệnh giá 2 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 5 Đồng 1985.jpg",
            name: "Tờ 5 Đồng (1985)",
            description: "Tiền giấy mệnh giá 5 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 10 Đồng 1985.jpg",
            name: "Tờ 10 Đồng (1985)",
            description: "Tiền giấy mệnh giá 10 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 20 Đồng 1985.jpg",
            name: "Tờ 20 Đồng (1985)",
            description: "Tiền giấy mệnh giá 20 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 30 Đồng 1985.jpg",
            name: "Tờ 30 Đồng (1985)",
            description: "Tiền giấy mệnh giá 30 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 50 Đồng 1985.jpg",
            name: "Tờ 50 Đồng (1985)",
            description: "Tiền giấy mệnh giá 50 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },
          {
            id: "Tờ 100 Đồng 1985.jpg",
            name: "Tờ 100 Đồng (1985)",
            description: "Tiền giấy mệnh giá 100 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          },

          {
            id: "Tờ 500 Đồng 1985.jpg",
            name: "Tờ 500 Đồng (1985)",
            description: "Tiền giấy mệnh giá 500 đồng phát hành trong cuộc cải cách 'Giá - Lương - Tiền' 1985."
          }
        ]
      },
      {
        id: "giai-doan-1990-nay",
        name: "Giai đoạn 1990 - nay (Tiền Cotton & Polymer)",
        description: "Trước thời kỳ polymer là các tờ tiền giấy cotton (10.000đ, 20.000đ, 50.000đ, 100.000đ). Từ 2003, Ngân hàng Nhà nước Việt Nam bắt đầu phát hành tiền polymer với độ bền cao và nhiều yếu tố bảo an hiện đại.",
        images: [
          {
            id: "100 đồng (1992).jpg",
            name: "100 đồng (1992)",
            description: "Ngày phát hành: 02/5/1992. Giấy in: Cotton. Mặt sau: Tháp Phổ Minh."
          },
          {
            id: "200 đồng (1987).jpg",
            name: "200 đồng (1987)",
            description: "Ngày phát hành: 30/9/1987. Giấy in: Cotton. Mặt sau: Sản xuất nông nghiệp."
          },
          {
            id: "500 đồng (1989).jpg",
            name: "500 đồng (1989)",
            description: "Ngày phát hành: 15/8/1989. Giấy in: Cotton. Mặt sau: Cảng Hải Phòng."
          },
          {
            id: "1.000 đồng (1989).jpg",
            name: "1.000 đồng (1989)",
            description: "Ngày phát hành: 20/10/1989. Giấy in: Cotton. Mặt sau: Khai thác gỗ."
          },
          {
            id: "2.000 đồng (1989).jpg",
            name: "2.000 đồng (1989)",
            description: "Ngày phát hành: 20/10/1989. Giấy in: Cotton. Mặt sau: Xưởng dệt."
          },
          {
            id: "5.000 đồng (1993).jpg",
            name: "5.000 đồng (1993)",
            description: "Ngày phát hành: 15/01/1993. Giấy in: Cotton. Mặt sau: Nhà máy Thủy điện Trị An."
          },
          {
            id: "10.000 đồng (2006 Polymer).jpg",
            name: "10.000 đồng (2006 Polymer)",
            description: "Ngày phát hành: 30/8/2006. Giấy in: Polymer. Mặt sau: Cảnh khai thác dầu khí."
          },
          {
            id: "20.000 đồng (2006 Polymer).jpg",
            name: "20.000 đồng (2006 Polymer)",
            description: "Ngày phát hành: 17/5/2006. Giấy in: Polymer. Mặt sau: Chùa Cầu, Hội An."
          },
          {
            id: "50.000 đồng (2003 Polymer).jpg",
            name: "50.000 đồng (2003 Polymer)",
            description: "Ngày phát hành: 17/12/2003. Giấy in: Polymer. Mặt sau: Phong cảnh Huế."
          },
          {
            id: "100.000 đồng (2004 Polymer).jpg",
            name: "100.000 đồng (2004 Polymer)",
            description: "Ngày phát hành: 01/9/2004. Giấy in: Polymer. Mặt sau: Văn miếu - Quốc Tử giám."
          },
          {
            id: "200.000 đồng (2006 Polymer).jpg",
            name: "200.000 đồng (2006 Polymer)",
            description: "Ngày phát hành: 30/8/2006. Giấy in: Polymer. Mặt sau: Vịnh Hạ Long."
          },
          {
            id: "500.000 đồng (2003 Polymer).jpg",
            name: "500.000 đồng (2003 Polymer)",
            description: "Ngày phát hành: 17/12/2003. Giấy in: Polymer. Mặt sau: Nhà Chủ tịch Hồ Chí Minh ở Kim Liên."
          }
        ]
      }
    ]
  }
];

// --- CÁC HÀM HỖ TRỢ ---

// Hàm đệ quy để lấy tất cả các hình ảnh từ cấu trúc phân cấp
function getAllImages(eras: Era[]): CurrencyImage[] {
  const allImages: CurrencyImage[] = [];

  for (const era of eras) {
    // Nếu era có images, thêm vào mảng
    if (era.images) {
      allImages.push(...era.images);
    }

    // Nếu era có subEras, đệ quy để lấy images từ các subEras
    if (era.subEras) {
      allImages.push(...getAllImages(era.subEras));
    }
  }

  return allImages;
}

// Export mảng "phẳng" chứa tất cả các hình ảnh (Dùng cho "Dòng chảy tiền")
export const allCurrencyImages: CurrencyImage[] = getAllImages(erasData);

// Thông tin điều hướng mục tiêu cho mỗi ảnh
export interface ImageTarget {
  eraId: string;      // Trang era cần mở
  sectionId?: string; // Anchor của sub-era (vd: section-phap-thuoc-1885-1906)
}

// Xây map từ imageId -> { eraId, sectionId }
function buildImageIdToTargetMap(eras: Era[], currentEraId?: string, map?: Record<string, ImageTarget>) {
  const targetMap = map ?? {};
  for (const era of eras) {
    const eraId = currentEraId ?? era.id;
    // Ảnh trực tiếp thuộc era
    if (era.images) {
      for (const img of era.images) {
        if (!targetMap[img.id]) {
          targetMap[img.id] = { eraId: era.id };
        }
      }
    }
    // Ảnh trong subEras: sectionId là id của subEra
    if (era.subEras) {
      for (const sub of era.subEras) {
        if (sub.images) {
          for (const img of sub.images) {
            if (!targetMap[img.id]) {
              targetMap[img.id] = { eraId: era.id, sectionId: `section-${sub.id}` };
            }
          }
        }
        // Đệ quy xuống sâu hơn, nhưng vẫn giữ era gốc làm trang đích
        if (sub.subEras) {
          buildImageIdToTargetMap([sub], era.id, targetMap);
        }
      }
    }
  }
  return targetMap;
}

export const imageIdToTarget: Record<string, ImageTarget> = buildImageIdToTargetMap(erasData);