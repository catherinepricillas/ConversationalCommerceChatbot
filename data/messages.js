module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Kalo boleh kenalan, dengan siapa saat ini Dian berbicara? 😃',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dian',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hai, selamat datang! Kenalin, nama aku Dian. Disini Dian bakal bantu Kakak buat belanja. Dian bisa ngelakuin banyak hal loh! Mulai dari jawab pertanyaan seputar produk, kasih rekomendasi produk, sampe nyariin promo-promo buat Kakak.',
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