export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  hot?: boolean;
  holiday?: boolean;
  bestSeller?: boolean;
  summer?: boolean;
  desc?: string;
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
  { id: "phe-xiu-vani", name: "PHÊ XỈU VANI", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2025/07/Phe-Xiu-Vani.jpg", hot: true, bestSeller: true, desc: "Vị ngọt nhẹ, thơm vani quen thuộc" },
  { id: "phe-espresso-colom", name: "PHÊ ESPRESSO (Hạt Colom, Ethi)", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg", desc: "Hậu vị ngọt, hương hoa nhẹ" },
  { id: "phe-espresso-ro", name: "PHÊ ESPRESSO (Hạt Ro, Ara)", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg", desc: "Đậm đà, mạnh mẽ" },
  { id: "phe-latte-colom", name: "PHÊ LATTE (Hạt Colom, Ethi)", price: 59000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg", bestSeller: true, desc: "Mịn màng, cân bằng" },
  { id: "phe-latte-ro", name: "PHÊ LATTE (Hạt Ro, Ara)", price: 54000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg" },
  { id: "phe-cappu-ro", name: "PHÊ CAPPU (Hạt Ro, Ara)", price: 54000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Cappu-hat-Colom-Ethi-Nong-scaled.jpg" },
  { id: "phe-cappu-colom", name: "PHÊ CAPPU (Hạt Colom, Ethi)", price: 59000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Cappu-hat-Colom-Ethi-Da-scaled.jpg" },
  { id: "phe-ame-ro", name: "PHÊ AME (Hạt Ro, Ara)", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-03.jpg" },
  { id: "phe-ame-colom", name: "PHÊ AME (Hạt Colom, Ethi)", price: 50000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Ame-hat-Colom-Ethi-scaled.jpg" },
  { id: "phe-nau", name: "PHÊ NÂU", price: 39000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2023/07/size-vuong-01.jpg" },
  { id: "phe-den", name: "PHÊ ĐEN", price: 39000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2021/07/14761.jpg" },
  { id: "da-lat", name: "ĐÀ LẠT", price: 45000, category: "ca-phe", image: "https://phela.vn/wp-content/uploads/2021/07/14761.jpg", holiday: true, desc: "Đặc sản cao nguyên Đà Lạt" },

  // SYPHON
  { id: "phan-xi-pang-long-nhan", name: "PHAN XI PĂNG LONG NHÃN", price: 0, category: "syphon", image: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg", hot: true, desc: "Tinh tế, ngọt dịu" },
  { id: "mat-nhan-o-long", name: "Mật Nhãn - Ô Long Long Nhãn Sữa", price: 0, category: "syphon", image: "https://phela.vn/wp-content/uploads/2025/12/Mat-Nhan-O-Long-Long-Nhan-Sua-scaled.jpg", hot: true },
  { id: "phong-lan-la", name: "Phong Lan (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/Phong-Lan-size-La.jpg" },
  { id: "o-long-nhai-sua-la", name: "Ô Long Nhài Sữa (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Nhai-Sua-size-La.jpg" },
  { id: "o-long-sua-la", name: "Ô Long Sữa Phê La (size La)", price: 69000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2024/07/O-Long-Sua-Phe-La-size-La.jpg" },
  { id: "phong-lan", name: "Phong Lan (Ô Long Vani Sữa)", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2023/11/PHONG-LAN-scaled.jpg", bestSeller: true, desc: "Hương hoa nhài dịu nhẹ" },
  { id: "o-long-sua", name: "Ô LONG SỮA PHÊ LA", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2021/07/14287.jpg", bestSeller: true, desc: "Mịn, béo, dễ uống" },
  { id: "o-long-nhai-sua", name: "Ô LONG NHÀI SỮA", price: 54000, category: "syphon", image: "https://phela.vn/wp-content/uploads/2021/07/14369.jpg", hot: true, holiday: true, desc: "Thơm nhài, đậm trà" },

  // FRENCH PRESS
  { id: "gam-o-long-vai", name: "GẤM - Ô LONG VẢI CHANH VÀNG", price: 0, category: "french-press", image: "https://phela.vn/wp-content/uploads/2026/01/Gam-phien-ban-moi-scaled.jpg", hot: true, summer: true, desc: "Trái vải tươi ngọt, chanh vàng thơm" },
  { id: "lua-dao-la", name: "LỤA ĐÀO (size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-LAAA.jpg", summer: true },
  { id: "lua-dao", name: "LỤA ĐÀO (size Phê)", price: 54000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg", bestSeller: true, summer: true, desc: "Thanh đào, mát lạnh" },
  { id: "tra-vo-ca-phe-la", name: "Trà Vỏ Cà Phê (size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/8-Tra-Vo-Ca-Phe.jpg" },
  { id: "o-long-dao-hong-la", name: "Ô LONG ĐÀO HỒNG (Size La)", price: 69000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/Resize-AppFood-KV-OLongDaoHong-2-03-scaled.jpg", summer: true, holiday: true },
  { id: "tra-vo-ca-phe", name: "TRÀ VỎ CÀ PHÊ", price: 54000, category: "french-press", image: "https://phela.vn/wp-content/uploads/2024/07/8-Tra-Vo-Ca-Phe.jpg" },

  // MOKA POT
  { id: "tam-la", name: "Tấm (size La)", price: 69000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/3-Tam.jpg" },
  { id: "khoi-blao-la", name: "Khói B'Lao (size La)", price: 69000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg" },
  { id: "khoi-blao", name: "KHÓI B'LAO", price: 54000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg", bestSeller: true, desc: "Khói cao nguyên B'Lao huyền bí" },
  { id: "tam", name: "TẤM", price: 54000, category: "moka-pot", image: "https://phela.vn/wp-content/uploads/2024/07/3-Tam.jpg" },

  // COLD BREW
  { id: "sua-chua-bong-buoi", name: "SỮA CHUA BÒNG BƯỞI", price: 0, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2025/09/Sua-Chua-Bong-Buoi-menu-scaled.jpg", hot: true, summer: true },
  { id: "bong-buoi-o-long", name: "BÒNG BƯỞI - Ô LONG BƯỞI NHA ĐAM", price: 64000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg", hot: true, summer: true, bestSeller: true, desc: "Bưởi tươi, nha đam mát lạnh" },
  { id: "lang-biang-la", name: "Lang Biang (size La)", price: 69000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg", summer: true },
  { id: "si-mo-la", name: "SI MƠ - COLD BREW Ô LONG MƠ ĐÀO (size La)", price: 64000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2024/07/Si-Mo-Cold-Brew-O-Long-Mo-Dao.jpg", summer: true, holiday: true, desc: "Mơ đào thơm, cold brew mát" },
  { id: "lang-biang", name: "LANG BIANG", price: 54000, category: "cold-brew", image: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg", bestSeller: true, summer: true, desc: "Đậm vị, mát lạnh, tỉnh táo" },

  // Ô LONG MATCHA
  { id: "matcha-phan-xi-pang", name: "MATCHA PHAN XI PĂNG", price: 64000, category: "o-long-matcha", image: "https://phela.vn/wp-content/uploads/2025/04/Matcha-Phan-Xi-Pang-da-xay-MOI-scaled.jpg", hot: true, bestSeller: true, desc: "Matcha đỉnh cao, đậm đà" },
  { id: "matcha-coco-latte", name: "MATCHA COCO LATTE", price: 59000, category: "o-long-matcha", image: "https://phela.vn/wp-content/uploads/2023/05/a%CC%89nh-vuo%CC%82ng-sp-matcha-latte_.jpg", summer: true, desc: "Dừa mát, matcha xanh tươi" },

  // TOPPING
  { id: "tran-chau-che-kho", name: "TRÂN CHÂU CHÈ KHO", price: 0, category: "topping", image: "https://phela.vn/wp-content/uploads/2026/02/Tran-Chau-Che-Kho-scaled.jpg" },
  { id: "thach-tra-chanh-vang", name: "THẠCH TRÀ CHANH VÀNG", price: 0, category: "topping", image: "https://phela.vn/wp-content/uploads/2025/09/Thach-Tra-Chanh-Vang-scaled.jpg" },
  { id: "thach-xiu-vani", name: "THẠCH XỈU VANI", price: 0, category: "topping", image: "https://phela.vn/wp-content/uploads/2025/07/Thach-Xiu-Vani.jpg" },
  { id: "thach-tra-dao-hong", name: "THẠCH TRÀ ĐÀO HỒNG", price: 15000, category: "topping", image: "https://phela.vn/wp-content/uploads/2025/06/Resize-AppFood-KV-OLongDaoHong-2-09-scaled.jpg" },
  { id: "thach-o-long-matcha", name: "THẠCH Ô LONG MATCHA", price: 15000, category: "topping", image: "https://phela.vn/wp-content/uploads/2025/04/Thach-O-Long-Matcha-MOI-scaled.jpg" },
  { id: "thach-tra-vo", name: "THẠCH TRÀ VỎ", price: 15000, category: "topping", image: "https://phela.vn/wp-content/uploads/2024/07/Thach-Tra-Vo-scaled.jpg" },
  { id: "tran-chau-phong-lan", name: "TRÂN CHÂU PHONG LAN", price: 10000, category: "topping", image: "https://phela.vn/wp-content/uploads/2024/02/3.-Tran-Chau-Phong-Lan-scaled.jpg" },
  { id: "tran-chau-o-long", name: "Trân Châu Ô Long", price: 10000, category: "topping", image: "https://phela.vn/wp-content/uploads/2021/10/14489.jpg" },
  { id: "tran-chau-gao-rang", name: "TRÂN CHÂU GẠO RANG", price: 10000, category: "topping", image: "https://phela.vn/wp-content/uploads/2021/10/14489.jpg" },

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
  { id: "khan-lua-dao", name: "Khăn Lụa Đào - Phiên bản mới", price: 99000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/07/Ava-Khan-Lua-Dao-Phien-ban-moi-scaled.jpg" },
  { id: "bot-bien-o-long", name: "Bọt biển Phê La - Ô Long Sữa", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg" },
  { id: "bot-bien-latte", name: "Bọt biển Phê La - Phê Latte", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg" },
  { id: "bot-bien-gao-rang", name: "Bọt biển Phê La - Trân Châu Gạo Rang", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg" },
  { id: "bot-bien-phe-nau", name: "Bọt biển Phê La - Phê Nâu", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg" },
  { id: "bot-bien-xe-van", name: "Bọt biển Phê La - Xe Van", price: 25000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Bot-bien-O-Long-Sua-Phe-La-scaled.jpg" },
  { id: "tui-tote-tron", name: "Túi Tote Happy Chill Day - Đai Trơn", price: 148000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Tui-Tote-Happpy-Chill-Day-%E2%80%93-Dai-Tron-scaled.jpg" },
  { id: "tui-tote-nhac", name: "Túi Tote Happy Chill Day - Đai Khuông Nhạc", price: 148000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/02/Tui-Tote-Happpy-Chill-Day-%E2%80%93-Dai-Khuong-Nhac-scaled.jpg" },
  { id: "phin-giay-dac-san", name: "Cà Phê Phin Giấy - Phê Đặc Sản", price: 442000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/01/DSC07207-scaled.jpg" },
  { id: "phin-giay-nguyen-ban", name: "Cà Phê Phin Giấy - Phê Nguyên Bản", price: 197000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2025/01/DSC07203-Edit-1-scaled.jpg" },
  { id: "hop-qua-tra-sua", name: "Hộp Quà Trà Sữa Tiện Lợi - Hộp 06 ly", price: 177000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/DSC08409-Edit-scaled.jpg" },
  { id: "hop-qua-dia-nhac", name: "Hộp Quà Đĩa Nhạc - Hộp 04 loại", price: 737000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/DSC03766-scaled.jpg" },
  { id: "hop-qua-phin-giay", name: "Hộp Quà Phin Giấy - Hộp 02 loại", price: 590000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/09/1.webp" },
  { id: "phe-phin-nguyen-ban", name: "Phê Phin Nguyên Bản - Túi 200gr", price: 108000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/Nguyen-Ban.jpg" },
  { id: "phe-geisha", name: "Phê Geisha - Túi 150gr", price: 418000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/9.-Phe-Geisha-Tui-150gr-1.jpg" },
  { id: "phe-ethiopia", name: "Phê Ethiopia - Túi 150gr", price: 246000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/8.-Phe-Ethiopia-Tui-150gr-2.jpg" },
  { id: "phe-kenya", name: "Phê Kenya - Túi 150gr", price: 270000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/7.-Phe-Kenya-Tui-150gr-2.jpg" },
  { id: "phe-colombia", name: "Phê Colombia - Túi 150gr", price: 295000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/6.-Phe-Colombia-Tui-150gr-1.jpg" },
  { id: "o-long-mua-xuan", name: "Ô Long Mùa Xuân Đặc Sản - Túi 150gr", price: 344000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2024/02/5.-O-Long-Mua-Xuan-Dac-San-Tui-150gr-3-300x300.jpg" },
  { id: "o-long-nhai-phin", name: "Ô LONG NHÀI SỮA PHIN GIẤY PHÊ LA", price: 374000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2021/12/1.-Phin-Giay-O-Long-Nhai-Sua-scaled.jpg" },
  { id: "o-long-sua-phin", name: "Ô LONG SỮA PHIN GIẤY PHÊ LA", price: 374000, category: "mang-ve", image: "https://phela.vn/wp-content/uploads/2021/12/1.-Phin-Giay-O-Long-Nhai-Sua-scaled.jpg" },
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

export type ArticleCategory = "Chiến Dịch" | "Văn Hoá Cà Phê & Trà" | "Lifestyle" | "Khuyến Mãi" | "Câu Chuyện" | "Tin tức" | "Sự Kiện" | "Mùa Hè";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: ArticleCategory;
  image?: string;
  featured?: boolean;
  readTime?: number;
}

export const newsArticles: Article[] = [
  {
    id: "top-do-uong-giai-nhiet",
    title: "Top đồ uống giải nhiệt mùa hè tại Phê La",
    excerpt: "Mùa hè đến rồi! Từ Cold Brew đậm đà, Bòng Bưởi mát lạnh đến Lụa Đào thanh nhẹ — Phê La gợi ý những ly nước hoàn hảo cho những ngày nắng nóng. Khám phá ngay top 5 lựa chọn không thể bỏ qua.",
    date: "2026-04-18",
    category: "Lifestyle",
    image: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg",
    featured: true,
    readTime: 4,
  },
  {
    id: "syphon-la-gi",
    title: "Syphon là gì? Vì sao phương pháp pha chế này đặc biệt?",
    excerpt: "Syphon — hay còn gọi là Vacuum Pot — là phương pháp pha cà phê và trà tinh tế nhất thế giới. Phê La là một trong số ít thương hiệu tại Việt Nam áp dụng kỹ thuật này để tạo ra những ly Ô Long và Matcha độc đáo.",
    date: "2026-04-15",
    category: "Văn Hoá Cà Phê & Trà",
    image: "https://phela.vn/wp-content/uploads/2021/07/14287.jpg",
    featured: true,
    readTime: 6,
  },
  {
    id: "french-press-don-gian-ma-chat",
    title: "French Press – Đơn giản nhưng chất lượng không kém",
    excerpt: "Đừng nhầm tưởng French Press là phương pháp 'dễ'. Phê La sử dụng French Press để chiết xuất Lụa Đào, Gấm Ô Long Vải và hàng loạt thức uống đặc sắc. Cùng tìm hiểu vì sao chiếc bình đơn giản này lại tạo ra hương vị phong phú đến vậy.",
    date: "2026-04-12",
    category: "Văn Hoá Cà Phê & Trà",
    image: "https://phela.vn/wp-content/uploads/2024/10/Ver-03-Lua-Dao-Phien-ban-Dong-Chill-yeu-thich-size-Phe.jpg",
    featured: true,
    readTime: 5,
  },
  {
    id: "checkin-30-4-phela",
    title: "Check-in 30/4 cùng Phê La — Ưu đãi và khoảnh khắc đáng nhớ",
    excerpt: "Dịp 30/4 – 1/5 năm nay, Phê La mang đến không gian chill đặc biệt tại tất cả cửa hàng. Mặc áo cờ đỏ sao vàng, check-in và nhận ngay topping miễn phí. Đây là những khoảnh khắc khách hàng đã trải nghiệm cùng chúng tôi.",
    date: "2026-04-10",
    category: "Chiến Dịch",
    image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg",
    featured: false,
    readTime: 3,
  },
  {
    id: "khoanh-khac-khach-hang",
    title: "Khoảnh khắc khách hàng tại Phê La — Tháng 4 rực rỡ",
    excerpt: "Những khoảnh khắc chân thực và đẹp nhất từ cộng đồng Phê La trong tháng 4. Từ góc chill Hà Nội đến quán tầm view Đà Lạt — mỗi ly thức uống là một câu chuyện.",
    date: "2026-04-05",
    category: "Lifestyle",
    image: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg",
    featured: false,
    readTime: 3,
  },
  {
    id: "tu-do-giai-phong-30-4",
    title: "30/4 – Mừng Ngày Giải Phóng Cùng Phê La 🇻🇳",
    excerpt: "Tự do có mùi vị của một ly trà Ô Long đá mát lạnh dưới nắng hè. Phê La mời bạn cùng chúng tôi kỷ niệm 50 năm ngày thống nhất đất nước theo cách thật đặc biệt.",
    date: "2026-04-19",
    category: "Chiến Dịch 30/4",
    image: "https://phela.vn/wp-content/uploads/2025/05/Bong-Buoi-scaled.jpg",
    featured: true,
  },
  {
    id: "summer-drinks-2026",
    title: "Mùa Hè Này Uống Gì? Top 5 Thức Uống Mát Lạnh Nhất Của Phê La",
    excerpt: "Cold Brew Ô Long, Bòng Bưởi, Lang Biang, Lụa Đào… Phê La gợi ý những ly thức uống tươi mát nhất để bạn vượt qua mùa hè 2026 đầy năng lượng.",
    date: "2026-04-15",
    category: "Mùa Hè",
    image: "https://phela.vn/wp-content/uploads/2021/07/14265.jpg",
    featured: true,
  },
  {
    id: "free-topping-campaign",
    title: "FREE TOPPING – Ưu Đãi Đặc Biệt Mừng 30/4 – 1/5",
    excerpt: "Từ 30/4 đến 1/5/2026, mỗi thức uống bạn gọi tại Phê La đều được tặng kèm 1 topping miễn phí. Chọn Trân Châu Ô Long, Thạch Trà Đào Hồng hay Thạch Xỉu Vani – tất cả đều free!",
    date: "2026-04-14",
    category: "Khuyến Mãi",
    image: "https://phela.vn/wp-content/uploads/2025/06/Resize-AppFood-KV-OLongDaoHong-2-09-scaled.jpg",
    featured: true,
  },
  {
    id: "viet-nam-dac-san-story",
    title: "Thuần Việt – Câu Chuyện Nguyên Liệu Từ Vườn Đến Ly",
    excerpt: "Mỗi ngụm Phê La là một chuyến đi. Từ cao nguyên B'Lao đến đỉnh Phan Xi Păng, từ vườn nhãn Long Nhãn đến rừng vải Hưng Yên – Phê La tôn vinh từng nốt hương đặc sản Việt Nam.",
    date: "2026-04-10",
    category: "Câu Chuyện",
    image: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg",
  },
  {
    id: "phan-xi-pang-long-nhan",
    title: "PHAN XI PĂNG LONG NHÃN – THỨC UỐNG SÁNG TẠO THEO MÙA",
    excerpt: "Từ miền sông nước trù phú với những trái dừa ngọt lành đến 'nóc nhà Đông Dương', Phê La kể tiếp câu chuyện Nốt Hương Đặc Sản qua Phan Xi Păng Long Nhãn.",
    date: "2026-03-15",
    category: "Tin tức",
    image: "https://phela.vn/wp-content/uploads/2026/03/Phan-Xi-Pang-Long-Nhan-da-xay-scaled.jpg",
  },
  {
    id: "youth-lifestyle-cafe",
    title: "Giới Trẻ Việt Và Văn Hóa Cà Phê Thế Hệ Mới",
    excerpt: "Syphon, French Press hay Cold Brew? Phê La không chỉ bán thức uống – chúng tôi kiến tạo không gian để thế hệ trẻ Việt Nam được là chính mình.",
    date: "2026-03-28",
    category: "Lifestyle",
    image: "https://phela.vn/wp-content/uploads/2024/07/4-Khoi-B_Lao.jpg",
  },
  {
    id: "gam-moi-lua-la",
    title: "Gấm mới lụa là – Xúng xính đi chill",
    excerpt: "Trong ký ức mỗi người, Tết bắt đầu bằng những tấm áo mới rực rỡ cùng cảm giác háo hức du xuân. Phê La tỉ mỉ dệt nên tấm vải Gấm mới.",
    date: "2026-02-01",
    category: "Sự Kiện",
    image: "https://phela.vn/wp-content/uploads/2026/01/Gam-phien-ban-moi-scaled.jpg",
  },
  {
    id: "mat-nhan-o-long",
    title: "Mật Nhãn – Ô Long Long Nhãn Sữa",
    excerpt: "Từ những quả Nhãn Hương Chi căng tròn vào chính vụ, Phê La tỉ mỉ gói ghém, lưu giữ thức quà ấy và mang đến phiên bản trà sữa sáng tạo.",
    date: "2026-01-20",
    category: "Tin tức",
    image: "https://phela.vn/wp-content/uploads/2025/12/Mat-Nhan-O-Long-Long-Nhan-Sua-scaled.jpg",
  },
];

export const storeHours = "7:00 – 22:30 hàng ngày";

export const bestSellerIds = [
  "bong-buoi-o-long", "lang-biang", "o-long-sua", "phong-lan",
  "lua-dao", "matcha-phan-xi-pang", "khoi-blao", "phe-xiu-vani",
];

export const summerIds = [
  "bong-buoi-o-long", "lang-biang", "si-mo-la", "lua-dao",
  "o-long-sua", "matcha-phan-xi-pang", "gam-o-long-vai", "matcha-coco-latte",
];

export const oolongIds = products
  .filter((p) => ["syphon", "french-press", "o-long-matcha"].includes(p.category))
  .map((p) => p.id);

export const coffeeIds = products
  .filter((p) => ["ca-phe", "moka-pot", "cold-brew"].includes(p.category))
  .map((p) => p.id);

export function formatPrice(price: number): string {
  if (price === 0) return "Liên hệ";
  return price.toLocaleString("vi-VN") + "₫";
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getArticlesByCategory(cat: ArticleCategory): Article[] {
  return newsArticles.filter((a) => a.category === cat);
}

export function getFeaturedArticles(): Article[] {
  return newsArticles.filter((a) => a.featured);
}
