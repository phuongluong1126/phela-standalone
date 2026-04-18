export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "ca-phe", name: "CÀ PHÊ" },
  { id: "syphon", name: "SYPHON" },
  { id: "french-press", name: "FRENCH PRESS" },
  { id: "moka-pot", name: "MOKA POT" },
  { id: "cold-brew", name: "COLD BREW" },
  { id: "o-long-matcha", name: "Ô LONG MATCHA" },
  { id: "topping", name: "TOPPING" },
  { id: "plus", name: "PLUS - LON/CHAI TIỆN LỢI" },
  { id: "mang-ve", name: "MANG PHÊ LA VỀ NHÀ" },
];

export const products: Product[] = [
  // CÀ PHÊ
  { id: "phe-xiu-vani", name: "PHÊ XỈU VANI", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2025/07/Phe-Xiu-Vani.jpg" },
  { id: "phe-espresso-colom", name: "PHÊ ESPRESSO (Hạt Colom, Ethi)", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg" },
  { id: "phe-espresso-ro", name: "PHÊ ESPRESSO (Hạt Ro, Ara)", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg" },
  { id: "phe-latte-colom", name: "PHÊ LATTE (Hạt Colom, Ethi)", price: 59000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg" },
  { id: "phe-latte-ro", name: "PHÊ LATTE (Hạt Ro, Ara)", price: 54000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg" },
  { id: "phe-cappu-ro", name: "PHÊ CAPPU (Hạt Ro, Ara)", price: 54000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Cappu-hat-Colom-Ethi-Nong-scaled.jpg" },
  { id: "phe-cappu-colom", name: "PHÊ CAPPU (Hạt Colom, Ethi)", price: 59000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Cappu-hat-Colom-Ethi-Da-scaled.jpg" },
  { id: "phe-ame-ro", name: "PHÊ AME (Hạt Ro, Ara)", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg" },
  { id: "phe-ame-colom", name: "PHÊ AME (Hạt Colom, Ethi)", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg" },
  { id: "phe-nau", name: "PHÊ NÂU", price: 39000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg" },
  { id: "phe-den", name: "PHÊ ĐEN", price: 39000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2021/07/14761.jpg" },
  { id: "da-lat", name: "ĐÀ LẠT", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2021/07/14761.jpg" },

  // SYPHON
  { id: "phan-xi-pang-long-nhan", name: "PHAN XI PĂNG LONG NHÃN", price: 0, category: "syphon", image: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg" },
  { id: "mat-nhan-o-long", name: "Mật Nhãn - Ô Long Long Nhãn Sữa", price: 0, category: "syphon", image: "https://phela.vn/wp-content/uploads/2025/12/Mat-Nhan-O-Long-Long-Nhan-Sua-scaled.jpg" },
  { id: "phong-lan-la", name: "Phong Lan (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/Phong-Lan-size-La.jpg" },
  { id: "o-long-nhai-sua-la", name: "Ô Long Nhài Sữa (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Nhai-Sua-size-La.jpg" },
  { id: "o-long-sua-la", name: "Ô Long Sữa Phê La (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Sua-Phe-La-size-La.jpg" },
  { id: "phong-lan", name: "Phong Lan (Ô Long Vani Sữa)", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-scaled.jpg" },
  { id: "o-long-sua", name: "Ô LONG SỮA PHÊ LA", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2021/07/14287.jpg" },
  { id: "o-long-nhai-sua", name: "Ô LONG NHÀI SỮA", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2021/07/14369.jpg" },

  // FRENCH PRESS
  { id: "gam-o-long-vai", name: "GẤM - Ô LONG VẢI CHANH VÀNG", price: 0, category: "french-press", image: "https://phela.vn/wp-content/uploads/2026/01/Gam-phien-ban-moi-scaled.jpg" },
  { id: "lua-dao-la", name: "LỤA ĐÀO (size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-LAAA.jpg" },
  { id: "lua-dao", name: "LỤA ĐÀO (size Phê)", price: 54000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg" },
  { id: "tra-vo-ca-phe-la", name: "Trà Vỏ Cà Phê (size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/8-Tra-Vo-Ca-Phe.jpg" },
  { id: "o-long-dao-hong-la", name: "Ô LONG ĐÀO HỒNG (Size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/Resize-AppFood-KV-OLongDaoHong-2-03-scaled.jpg" },
  { id: "tra-vo-ca-phe", name: "TRÀ VỎ CÀ PHÊ", price: 54000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/8-Tra-Vo-Ca-Phe.jpg" },

  // MOKA POT
  { id: "tam-la", name: "Tấm (size La)", price: 69000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/3-Tam.jpg" },
  { id: "khoi-blao-la", name: "Khói B'Lao (size La)", price: 69000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg" },
  { id: "khoi-blao", name: "KHÓI B'LAO", price: 54000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg" },
  { id: "tam", name: "TẤM", price: 54000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/3-Tam.jpg" },

  // COLD BREW
  { id: "sua-chua-bong-buoi", name: "SỮA CHUA BÒNG BƯỞI", price: 0, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2025/09/Sua-Chua-Bong-Buoi-menu-scaled.jpg" },
  { id: "bong-buoi-o-long", name: "BÒNG BƯỞI - Ô LONG BƯỞI NHA ĐAM", price: 64000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg" },
  { id: "lang-biang-la", name: "Lang Biang (size La)", price: 69000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg" },
  { id: "si-mo-la", name: "SI MƠ - COLD BREW Ô LONG MƠ ĐÀO (size La)", price: 64000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2024/07/Si-Mo-Cold-Brew-O-Long-Mo-Dao.jpg" },
  { id: "lang-biang", name: "LANG BIANG", price: 54000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg" },

  // Ô LONG MATCHA
  { id: "matcha-phan-xi-pang", name: "MATCHA PHAN XI PĂNG", price: 64000, category: "o-long-matcha", image: "https://phela.vn/wp-content/uploads/2025/04/Matcha-Phan-Xi-Pang-da-xay-MOI-scaled.jpg" },
  { id: "matcha-coco-latte", name: "MATCHA COCO LATTE", price: 59000, category: "o-long-matcha", image: "https://phela.vn/wp-content/uploads/2023/05/anh-vuong-sp-matcha-latte_.jpg" },

  // TOPPING
  { id: "tran-chau-che-kho", name: "TRÂN CHÂU CHÈ KHO", price: 0, category: "topping" },
  { id: "thach-tra-chanh-vang", name: "THẠCH TRÀ CHANH VÀNG", price: 0, category: "topping" },
  { id: "thach-xiu-vani", name: "THẠCH XỈU VANI", price: 0, category: "topping" },
  { id: "thach-tra-dao-hong", name: "THẠCH TRÀ ĐÀO HỒNG", price: 15000, category: "topping" },
  { id: "thach-o-long-matcha", name: "THẠCH Ô LONG MATCHA", price: 15000, category: "topping" },
  { id: "thach-tra-vo", name: "THẠCH TRÀ VỎ", price: 15000, category: "topping" },
  { id: "tran-chau-phong-lan", name: "TRÂN CHÂU PHONG LAN", price: 10000, category: "topping" },
  { id: "tran-chau-o-long", name: "Trân Châu Ô Long", price: 10000, category: "topping" },
  { id: "tran-chau-gao-rang", name: "TRÂN CHÂU GẠO RANG", price: 10000, category: "topping" },

  // PLUS - LON/CHAI TIỆN LỢI
  { id: "plus-mat-nhan", name: "Plus - Mật Nhãn", price: 0, category: "plus", image: "https://phela.vn/wp-content/uploads/2025/12/Mat-Nhan-O-Long-Long-Nhan-Sua-scaled.jpg" },
  { id: "plus-khoi-blao", name: "PLUS - KHÓI B'LAO", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-matcha-coco", name: "PLUS - MATCHA COCO LATTE", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-lua-dao", name: "PLUS - LỤA ĐÀO", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2024/10/Plus-Lua-Dao-moi-1-300x300.jpg" },
  { id: "plus-phong-lan", name: "PLUS - PHONG LAN", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-cold-brew", name: "PLUS - COLD BREW", price: 98182, category: "plus", image: "https://phela.vn/wp-content/uploads/2025/01/DSC07207-scaled.jpg" },
  { id: "plus-da-lat", name: "PLUS - ĐÀ LẠT", price: 137455, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-dinh-phu-van", name: "PLUS - ĐỈNH PHÙ VÂN", price: 137455, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-tam", name: "PLUS - TẤM", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-o-long-nhai-sua", name: "PLUS - Ô LONG NHÀI SỮA", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },
  { id: "plus-o-long-sua", name: "PLUS - Ô LONG SỮA PHÊ LA", price: 108000, category: "plus", image: "https://phela.vn/wp-content/uploads/2021/08/2.-Plus-Da-Lat-300x300.jpg" },

  // MANG PHÊ LA VỀ NHÀ
  { id: "khan-lua-dao", name: "Khăn Lụa Đào - Phiên bản mới", price: 99000, category: "mang-ve" },
  { id: "bot-bien-o-long", name: "Bọt biển Phê La - Ô Long Sữa", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-300x300.jpg" },
  { id: "bot-bien-latte", name: "Bọt biển Phê La - Phê Latte", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-300x300.jpg" },
  { id: "bot-bien-gao-rang", name: "Bọt biển Phê La - Trân Châu Gạo Rang", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-300x300.jpg" },
  { id: "bot-bien-phe-nau", name: "Bọt biển Phê La - Phê Nâu", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-300x300.jpg" },
  { id: "bot-bien-xe-van", name: "Bọt biển Phê La - Xe Van", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-300x300.jpg" },
  { id: "tui-tote-tron", name: "Túi Tote Happy Chill Day - Đai Trơn", price: 148000, category: "mang-ve" },
  { id: "tui-tote-nhac", name: "Túi Tote Happy Chill Day - Đai Khuông Nhạc", price: 148000, category: "mang-ve" },
  { id: "phin-giay-dac-san", name: "Cà Phê Phin Giấy - Phê Đặc Sản", price: 442000, category: "mang-ve" },
  { id: "phin-giay-nguyen-ban", name: "Cà Phê Phin Giấy - Phê Nguyên Bản", price: 197000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/Nguyen-Ban.jpg" },
  { id: "hop-qua-tra-sua", name: "Hộp Quà Trà Sữa Tiện Lợi - Hộp 06 ly", price: 177000, category: "mang-ve" },
  { id: "hop-qua-dia-nhac", name: "Hộp Quà Đĩa Nhạc - Hộp 04 loại", price: 737000, category: "mang-ve" },
  { id: "hop-qua-phin-giay", name: "Hộp Quà Phin Giấy - Hộp 02 loại", price: 590000, category: "mang-ve" },
  { id: "phe-phin-nguyen-ban", name: "Phê Phin Nguyên Bản - Túi 200gr", price: 108000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/Nguyen-Ban.jpg" },
  { id: "phe-geisha", name: "Phê Geisha - Túi 150gr", price: 418000, category: "mang-ve" },
  { id: "phe-ethiopia", name: "Phê Ethiopia - Túi 150gr", price: 246000, category: "mang-ve" },
  { id: "phe-kenya", name: "Phê Kenya - Túi 150gr", price: 270000, category: "mang-ve" },
  { id: "phe-colombia", name: "Phê Colombia - Túi 150gr", price: 295000, category: "mang-ve" },
  { id: "o-long-mua-xuan", name: "Ô Long Mùa Xuân Đặc Sản - Túi 150gr", price: 344000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/5.-O-Long-Mua-Xuan-Dac-San-Tui-150gr-3-300x300.jpg" },
  { id: "o-long-nhai-phin", name: "Ô LONG NHÀI SỮA PHIN GIẤY PHÊ LA", price: 374000, category: "mang-ve" },
  { id: "o-long-sua-phin", name: "Ô LONG SỮA PHIN GIẤY PHÊ LA", price: 374000, category: "mang-ve" },
];

export const stores = [
  { id: "pham-ngoc-thach", name: "Phê La - Phạm Ngọc Thạch", address: "Số 65 Phạm Ngọc Thạch, Quận Đống Đa, Hà Nội", city: "Hà Nội", phone: "1900 3013", description: "Chốn chill đầu tiên" },
  { id: "dalat", name: "Phê La - Đà Lạt", address: "Số 7 Nguyễn Chí Thanh, TP Đà Lạt, Lâm Đồng", city: "Đà Lạt", phone: "1900 3013" },
  { id: "bach-dang-dn", name: "Phê La - Bạch Đằng", address: "Số 36-38 Bạch Đằng, Hải Châu, Đà Nẵng", city: "Đà Nẵng", phone: "1900 3013" },
  { id: "nvl-dn", name: "Phê La - Nguyễn Văn Linh", address: "Số 35-41 Nguyễn Văn Linh, Hải Châu, Đà Nẵng", city: "Đà Nẵng", phone: "1900 3013" },
  { id: "hoian", name: "Phê La - Hội An", address: "Số 10 Phan Châu Trinh, Cẩm Châu, Hội An", city: "Hội An", phone: "1900 3013" },
  { id: "bien-hoa", name: "Phê La - Biên Hòa", address: "Số 288 Võ Thị Sáu, TP Biên Hòa, Đồng Nai", city: "Biên Hòa", phone: "1900 3013" },
  { id: "tay-ho", name: "Phê La - Tây Hồ", address: "Số 01 Nguyễn Đình Thi, Tây Hồ, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "times-city", name: "Phê La - Times City", address: "Tầng 1, Tòa Park 11, Vinhomes Times City, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "htk", name: "Phê La - Huỳnh Thúc Kháng", address: "Số 18 Huỳnh Thúc Kháng, Giảng Võ, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "ocean-park", name: "Phê La - Ocean Park", address: "Tầng 01, Tòa H1, Vinhomes Ocean Park, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "yen-phu", name: "Phê La - Yên Phụ", address: "Số 42 Yên Phụ, Trúc Bạch, Ba Đình, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "lvl", name: "Phê La - Lê Văn Lương", address: "Số 19 Lê Văn Lương, Thanh Xuân, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "trich-sai", name: "Phê La - Trích Sài", address: "Số 145 Trích Sài, Tây Hồ, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "linh-dam", name: "Phê La - Linh Đàm", address: "Lô 2BT5, Bắc Linh Đàm, Hoàng Mai, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "cau-giay", name: "Phê La - Cầu Giấy", address: "Số 46 Trần Quốc Hoàn, Cầu Giấy, Hà Nội", city: "Hà Nội", phone: "1900 3013" },
  { id: "hai-phong-1", name: "Phê La - Bùi Thị Xuân HP", address: "Số 01 Bùi Thị Xuân, Lê Thanh Nghị, Hải Phòng", city: "Hải Phòng", phone: "1900 3013" },
  { id: "hai-phong-2", name: "Phê La - Kỳ Đồng HP", address: "01 Kỳ Đồng, Hồng Bàng, Hải Phòng", city: "Hải Phòng", phone: "1900 3013" },
  { id: "hue", name: "Phê La - Huế", address: "Số 30 Lê Lợi, Thuận Hoá, Huế", city: "Huế", phone: "1900 3013" },
  { id: "nha-trang-1", name: "Phê La - Vincom Nha Trang", address: "Tầng L1, Vincom Plaza, 44-46 Lê Thánh Tôn, Nha Trang", city: "Nha Trang", phone: "1900 3013" },
  { id: "nha-trang-2", name: "Phê La - Trần Phú", address: "Số 24 Trần Phú, Lộc Thọ, Nha Trang", city: "Nha Trang", phone: "1900 3013" },
  { id: "hcm-sala", name: "Phê La - Thiso Mall Sala", address: "Tầng 1, Thiso Mall Sala, 10 Mai Chí Thọ, TP HCM", city: "TP HCM", phone: "1900 3013" },
  { id: "hcm-q10", name: "Phê La - Lý Thường Kiệt", address: "140 Lý Thường Kiệt, Quận 10, TP HCM", city: "TP HCM", phone: "1900 3013" },
  { id: "hcm-hbt", name: "Phê La - Hai Bà Trưng", address: "Số 125 Hai Bà Trưng, Quận 1, TP HCM", city: "TP HCM", phone: "1900 3013" },
  { id: "hcm-bt", name: "Phê La - Bình Thạnh", address: "Số 31 Ung Văn Khiêm, Quận Bình Thạnh, TP HCM", city: "TP HCM", phone: "1900 3013" },
  { id: "vung-tau", name: "Phê La - Vũng Tàu", address: "2 Lê Lợi, Phường 1, Vũng Tàu", city: "Vũng Tàu", phone: "1900 3013" },
];

export const newsArticles = [
  { id: "phan-xi-pang-long-nhan", title: "PHAN XI PĂNG LONG NHÃN – THỨC UỐNG SÁNG TẠO THEO MÙA", excerpt: "Từ miền sông nước trù phú với những trái dừa ngọt lành đến 'nóc nhà Đông Dương', Phê La kể tiếp câu chuyện Nốt Hương Đặc Sản qua Phan Xi Păng Long Nhãn.", date: "2024-03-15", category: "Tin tức" },
  { id: "gam-moi-lua-la", title: "Gấm mới lụa là – Xúng xính đi chill", excerpt: "Trong ký ức mỗi người, Tết bắt đầu bằng những tấm áo mới rực rỡ cùng cảm giác háo hức du xuân. Phê La tỉ mỉ dệt nên tấm vải Gấm mới.", date: "2024-02-01", category: "Sự Kiện" },
  { id: "mat-nhan-o-long", title: "Mật Nhãn – Ô Long Long Nhãn Sữa", excerpt: "Từ những quả Nhãn Hương Chi căng tròn vào chính vụ, Phê La tỉ mỉ gói ghém, lưu giữ thức quà ấy và mang đến phiên bản trà sữa sáng tạo.", date: "2024-01-20", category: "Tin tức" },
  { id: "phe-xiu-vani", title: "Phê Xỉu Vani – Chill Đây Chill Đó", excerpt: "Như thước phim tuổi thơ chầm chậm quay về ngày bé ngồi sau lưng Bố, Phê La mang ký ức ấy trở lại qua Phê Xỉu Vani.", date: "2024-01-10", category: "Tin tức" },
];

export function formatPrice(price: number): string {
  if (price === 0) return "Liên hệ";
  return price.toLocaleString("vi-VN") + "₫";
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}
