# Cập nhật hệ thống nhạc nền

## Bạn cần xóa các dòng `musicUrl` trong subEras

Chỉ giữ lại 4 file nhạc chính cho 4 thời kỳ lớn:

1. ✅ `/music/Thời phong kiến.mp3` - Dòng 26
2. ✅ `/music/Thời Pháp thuộc (1885–1954).mp3` - Dòng 181  
3. ✅ `/music/Sau Cách mạng tháng Tám (1945–1975).mp3` - Dòng 242
4. ✅ `/music/Thời kì thống nhất và đổi mới (1975 - nay).mp3` - Dòng 407

## Cần XÓA các dòng musicUrl sau (có 8 spaces indent):

### Trong Thời Phong Kiến:
- Dòng 32: `musicUrl: "/music/nha-dinh.mp3",`
- Dòng 60: `musicUrl: "/music/nha-tien-le.mp3",`
- Dòng 83: `musicUrl: "/music/nha-ly.mp3",`
- Dòng 106: `musicUrl: "/music/nha-ho.mp3",`
- Dòng 124: `musicUrl: "/music/hau-le.mp3",`
- Dòng 142: `musicUrl: "/music/tay-son.mp3",`
- Dòng 160: `musicUrl: "/music/nha-nguyen.mp3",`

### Trong Thời Pháp Thuộc:
- Dòng 187: `musicUrl: "/music/phap-thuoc-1.mp3",`
- Dòng 200: `musicUrl: "/music/phap-thuoc-2.mp3",`
- Dòng 213: `musicUrl: "/music/phap-thuoc-3.mp3",`
- Dòng 226: `musicUrl: "/music/phap-thuoc-4.mp3",`

### Trong Sau Cách Mạng Tháng Tám:
- Dòng 248: `musicUrl: "/music/giay-bac-cu-ho.mp3",`
- Dòng 266: `musicUrl: "/music/nhqgvn-1951.mp3",`
- Dòng 300: `musicUrl: "/music/chia-cat.mp3",`
- Dòng 306: `musicUrl: "/music/mien-bac.mp3",`
- Dòng 379: `musicUrl: "/music/mien-nam.mp3",`

### Trong Thống Nhất & Đổi Mới:
- Dòng 413: `musicUrl: "/music/giai-phong.mp3",`
- Dòng 457: `musicUrl: "/music/gia-luong-tien.mp3",`
- Dòng 516: `musicUrl: "/music/hien-dai-polymer.mp3",`

## Tổng cộng cần xóa: 19 dòng

## Sau khi xóa, bạn chỉ cần 4 file MP3:
1. `Thời phong kiến.mp3`
2. `Thời Pháp thuộc (1885–1954).mp3`
3. `Sau Cách mạng tháng Tám (1945–1975).mp3`
4. `Thời kì thống nhất và đổi mới (1975 - nay).mp3`

Đặt vào thư mục `public/music/`
