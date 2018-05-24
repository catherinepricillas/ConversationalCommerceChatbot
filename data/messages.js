module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Dian kan udah kenalin diri, sekarang dengan Kakak siapa saat ini Dian berbicara? 😃',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dian',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Jika Kakak butuh bantuan dan penjelasan lebih lanjut, bisa pilih bantuan pada menu di kiri bawah.',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dian',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hai, selamat datang! Kenalin, nama aku Dian. Disini Dian bakal bantu Kakak buat belanja mulai dari jawab pertanyaan seputar produk, kasih rekomendasi produk, bahkan cariin promo, Dian bisa semua! 💁‍',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dian',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Mulai belanja',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'User',
    },
    //sent: true,
    //received: true,
  },
];