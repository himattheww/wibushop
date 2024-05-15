import React, { useState } from 'react';
import MangaImage from '../../Assets/Login Page/background-login4.jpg'; // Ganti dengan path gambar yang sesuai
import Header from '../../Components/Header';

const mangaList = [
  {
    id: 1,
    title: 'Manga 1',
    description: 'Deskripsi Manga 1',
    image: MangaImage,
  },
  {
    id: 2,
    title: 'Manga 2',
    description: 'Deskripsi Manga 2',
    image: MangaImage,
  },
  // Tambahkan lebih banyak manga di sini
];

const Manga = () => {
  const [selectedManga, setSelectedManga] = useState(null);

  const handleSelectManga = (manga) => {
    setSelectedManga(manga);
  };

  return (
    <>
    <Header/>

    </>
  );
};

export default Manga;
