import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { aniMangaList } from "./Data";

const Animangaupdate = () => {
  const checkUpdateDay = (dataArray) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const filteredData = dataArray.filter((item) => item.dayupdate === today);
    return filteredData;
  };

  const filteredMangaData = checkUpdateDay(aniMangaList.animeData);
  const filteredAnimeData = checkUpdateDay(aniMangaList.mangaData);

  console.log("Filtered Manga Data:", filteredMangaData);
  console.log("Filtered Anime Data:", filteredAnimeData);

  return (
    <>
      {/* Box 2.1: Updates */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: "#1f1f1f",
        }}
      >
        {/* Box 2.1.1: Manga Updates */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#FFFF",
              backgroundColor: "#00796b",
            }}
          >
            Pembaharuan Harian Manga
          </Typography>
          <Grid container spacing={2}>
            {filteredMangaData.length > 0 ? (
              filteredMangaData.map((manga, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card
                    sx={{
                      "&:hover": { boxShadow: 6, bgcolor: "#e0f7fa" },
                      backgroundImage: `url(${manga.backgroundImage})`, // Menambahkan latar belakang gambar
                      backgroundSize: "cover",
                      color: "#000", // Warna teks
                      cursor: "pointer", // Mengubah cursor saat hover
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        {manga.title}
                      </Typography>
                      <Typography variant="body2">
                        {manga.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ color: "#FFFF" }}>
                Tidak ada pembaruan manga hari ini.
              </Typography>
            )}
          </Grid>
        </Box>

        {/* Box 2.1.2: Anime Updates */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#000",
              backgroundColor: "#f57c00",
            }}
          >
            Pembaharuan Harian Anime
          </Typography>
          <Grid container spacing={2}>
            {filteredAnimeData.length > 0 ? (
              filteredAnimeData.map((anime, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card
                    sx={{
                      "&:hover": { boxShadow: 6, bgcolor: "#ffecb3" },
                      backgroundImage: `url(${anime.backgroundImage})`, // Menambahkan latar belakang gambar
                      backgroundSize: "cover",
                      color: "#000", // Warna teks
                      cursor: "pointer", // Mengubah cursor saat hover
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        {anime.title}
                      </Typography>
                      <Typography variant="body2">
                        {anime.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ color: "#FFFF" }}>
                Tidak ada pembaruan anime hari ini.
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Animangaupdate;
