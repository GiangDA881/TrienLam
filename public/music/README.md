# Hướng dẫn thêm nhạc nền

## Cách thêm file nhạc:

1. **Tải nhạc về máy:**
   - Tìm và tải các file nhạc phù hợp với từng thời kỳ
   - Format khuyến nghị: MP3 (tương thích tốt nhất)

2. **Đặt file vào thư mục này:**
   ```
   public/music/
   ├── phong-kien.mp3
   ├── nha-dinh.mp3
   ├── nha-le.mp3
   ├── nha-ly.mp3
   ├── nha-tran.mp3
   ├── nha-nguyen.mp3
   ├── phap-thuoc.mp3
   ├── dong-duong.mp3
   └── hien-dai.mp3
   ```

3. **Đường dẫn trong code:**
   - Đã được config sẵn trong `src/data/eras.ts`
   - Ví dụ: `musicUrl: "/music/phong-kien.mp3"`

## Gợi ý nhạc nền:

- **Thời Phong Kiến**: Nhạc cung đình, nhạc lễ
- **Nhà Đinh/Lê/Lý/Trần**: Nhạc truyền thống, tiếng đàn tranh
- **Nhà Nguyễn**: Nhạc cung đình Huế, nhã nhạc
- **Thời Pháp Thuộc**: Nhạc xưa năm 30-40
- **Thời Hiện Đại**: Nhạc đại chúng, hoặc instrumental hiện đại

## Lưu ý:

- File nhạc không quá lớn (khuyến nghị < 5MB)
- Chất lượng 128-192kbps là đủ cho web
- Có thể dùng nhạc không bản quyền từ:
  - YouTube Audio Library
  - Free Music Archive
  - Incompetech
  - Bensound
