import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Header from "../Components/Header";
import Carousel from "react-material-ui-carousel"; // Pastikan untuk menginstal react-material-ui-carousel

// Import gambar untuk carousel dan cards
import backgroundHome from "../Assets/Login Page/background-login3.jpg";
import MangaImage from "../Assets/Login Page/background-login4.jpg";
import AnimeImage from "../Assets/Login Page/background-login4.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Mengganti VisibilityIcon dengan WhatshotIcon

const HomePage = () => {
  console.log("Home Page Loaded");

  const mangaData = [
    {
      title: "Manga Title 1",
      author: "Author 1",
      description: "Description for Manga 1",
      dayupdate: "Thursday",
    },
    {
      title: "Manga Title 2",
      author: "Author 2",
      description: "Description for Manga 2",
      dayupdate: "Thursday",
    },
  ];

  const animeData = [
    {
      title: "Anime Title 1",
      author: "Author 1",
      description: "Description for Anime 1",
      dayupdate: "Thursday",
    },
    {
      title: "Anime Title 2",
      author: "Author 2",
      description: "Description for Anime 2",
      dayupdate: "Friday",
    },
  ];

  const checkUpdateDay = (dataArray) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const filteredData = dataArray.filter((item) => item.dayupdate === today);
    return filteredData;
  };

  const filteredMangaData = checkUpdateDay(mangaData);
  const filteredAnimeData = checkUpdateDay(animeData);

  console.log("Filtered Manga Data:", filteredMangaData);
  console.log("Filtered Anime Data:", filteredAnimeData);

  const [toggleWidth, setToggleWidth] = useState(false);

  const handleToggleSize = () => {
    setToggleWidth(!toggleWidth);
  };

  const carouselItems = [
    {
      img: backgroundHome,
      title: "Carousel Image 1",
    },
    {
      img: MangaImage,
      title: "Carousel Image 2",
    },
    {
      img: AnimeImage,
      title: "Carousel Image 3",
    },
  ];

  const mostViewedContent = Array.from({ length: 10 }, (_, index) => ({
    title: `Most Viewed Title ${index + 1}`,
    description: `Description for Most Viewed Content ${index + 1}`,
  }));

  return (
    <>
      <Header handleToggleSize={handleToggleSize} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          bgcolor: "#333",
        }}
      >
        {/* Box 1: Carousel */}
        <Box sx={{ mb: 4 }}>
          <Carousel>
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ))}
          </Carousel>
        </Box>

        {/* Box 2: Main Content */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* Box 2.1: Updates */}
          <Box
            sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 4 }}
          >
            {/* Box 2.1.1: Manga Updates */}
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "#FFFF" }}
              >
                Pembaharuan Harian Manga
              </Typography>
              <Grid container spacing={2}>
                {filteredMangaData.length > 0 ? (
                  filteredMangaData.map((manga, index) => (
                    <Grid item xs={6} md={4} key={index}>
                      <Card
                        sx={{ "&:hover": { boxShadow: 6, bgcolor: "#e0f7fa" } }}
                      >
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: "bold",
                              color: "#00796b",
                            }}
                          >
                            {manga.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, color: "#004d40" }}
                          >
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
                sx={{ mb: 2, fontWeight: "bold", color: "#FFFF" }}
              >
                Pembaharuan Harian Anime
              </Typography>
              <Grid container spacing={2}>
                {filteredAnimeData.length > 0 ? (
                  filteredAnimeData.map((anime, index) => (
                    <Grid item xs={6} md={4} key={index}>
                      <Card
                        sx={{ "&:hover": { boxShadow: 6, bgcolor: "#ffecb3" } }}
                      >
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: "bold",
                              color: "#f57c00",
                            }}
                          >
                            {anime.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, color: "#e65100" }}
                          >
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

          {/* Box 2.2: Side Content */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}
          >
            {/* Box 2.2.1: Social Media */}
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Button
                sx={{
                  position: "relative",
                  bgcolor: "#e91e63",
                  color: "#fff",
                  "&:hover": { bgcolor: "#c2185b" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Typography className="text">Instagram</Typography>
                <InstagramIcon className="icon" sx={{ display: "none" }} />
              </Button>
              <Button
                sx={{
                  position: "relative",
                  bgcolor: "#3b5998",
                  color: "#fff",
                  "&:hover": { bgcolor: "#2a4887" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Typography className="text">Facebook</Typography>
                <FacebookIcon className="icon" sx={{ display: "none" }} />
              </Button>
              <Button
                sx={{
                  position: "relative",
                  bgcolor: "#cddc39",
                  color: "#fff",
                  "&:hover": { bgcolor: "#afb42b" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Typography className="text">Email</Typography>
                <EmailIcon className="icon" sx={{ display: "none" }} />
              </Button>
            </Box>

            {/* Box 2.2.2: Most Viewed Content */}
            <Box>
              {/* Sub-box 2.2.2.1: Icon and Title */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <WhatshotIcon sx={{ mr: 1, color: "#ff5722" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#FFF" }}
                >
                  Paling Sering Dilihat
                </Typography>
              </Box>

              {/* Sub-box 2.2.2.2: Content Cards */}
              <Box>
                <Grid container spacing={2}>
                  {mostViewedContent.map((content, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{ "&:hover": { boxShadow: 6, bgcolor: "#fff9c4" } }}
                      >
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "1.25rem",
                              fontWeight: "bold",
                              color: "#fbc02d",
                            }}
                          >
                            {content.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, color: "#f57f17" }}
                          >
                            {content.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
