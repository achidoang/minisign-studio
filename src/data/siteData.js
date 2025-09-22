// src/data/siteData.js
const siteData = {
  company: {
    name: "MiniSign Studio",
    tagline: "Papan Ucapan Mini – Ekspresikan Momen Spesial!",
    logoUrl: "/public/image/bumc.jpg",
    whatsappNumber: "082135010481",
    googleFormLink: "https://forms.google.com/placeholder-form-link",
    templateDriveLink: "https://drive.google.com/drive/u/0/folders/1SjnQO_HhnfdYbJ-RvDJzfkdamYNPfyoh"
  },
  product: {
    name: "Papan Ucapan Mini",
    normalPrice: 50000,
    discountPrice: 35000
  },
  paymentMethods: [
    { bank: "BCA", account: "7851348062", name: "Clarisca Audyta Permata" },
    { bank: "BNI", account: "0377728906", name: "Clarisca Audyta Permata" },
    { bank: "BRI", account: "689201028409536", name: "Clarisca Audyta Permata" },
    { bank: "Shopee", account: "082137482210", name: "riscatt" },
    { bank: "Gopay/Dana", account: "0895363410140", name: "Clarisca Audyta Permata" }
  ],
  testimonials: [
    { name: "Sarah M.", rating: 5, text: "Papan ucapannya lucu banget! Perfect buat surprise ultah pacar. Kualitas bagus dan harga terjangkau." },
    { name: "Andi K.", rating: 5, text: "Pelayanan cepat, design sesuai request. Recommended banget buat yang mau kasih hadiah unik!" },
    { name: "Lisa P.", rating: 5, text: "Sudah order 3x, selalu puas! Tim MiniSign Studio profesional dan kreatif." }
  ],
  faqs: [
    { question: "Berapa lama proses pembuatan papan ucapan?", answer: "Proses pembuatan memakan waktu 1-3 hari kerja setelah design disetujui." },
    { question: "Apakah bisa custom design sendiri?", answer: "Tentu saja! Kami menerima custom design sesuai keinginan Anda. Silakan kirim referensi melalui WhatsApp." },
    { question: "Bagaimana cara pembayaran?", answer: "Pembayaran bisa melalui transfer bank (BCA, BNI, BRI), e-wallet (Gopay, Dana), atau Shopee." },
    { question: "Apakah ada minimal order?", answer: "Tidak ada minimal order. Anda bisa pesan 1 buah saja dengan harga yang sama." }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578764677-7c5292d1088d?w=400&h=400&fit=crop"
  ]
};

export default siteData;
