// Header isinya  :3 garis kalau diclick kaya side bar, Logo, pencarian, download aplikasi, History, Profile Icon yang isinya Profile saya, Logout
// Halaman Utama => nanti kaya ada 3 poster, Baca Manga, Nonton Anime, Belanja / Shopping
// Baca Manga
// Nonton Anime
// Shopping , nanti kaya dropdown juga=> Beli Manga, merch, figurine
// Nanti tambahi fitur anime atau manga nya keluar hari apa aja

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Header from "../Components/Header";

const HomePage = () => {
  const [toggleWidth, setToggleWidth] = useState(false);

  const handleToggleSize = () => {
    setToggleWidth(!toggleWidth);
  };

  return (
    <>
      <Header handleToggleSize={handleToggleSize} />
      <Box display="flex">
        <Box
          sx={{
            width: toggleWidth ? "13%" : "4%",
            height: "100px",
            bgcolor: "#ff4000",
          }}
        />
        <Box
          sx={{
            width: toggleWidth ? "calc(96% - 10px)" : "calc(100% - 10px)",
            height: "100px",
            bgcolor: "#2196f3",
          }}
        />
      </Box>
    </>
  );
};

export default HomePage;

