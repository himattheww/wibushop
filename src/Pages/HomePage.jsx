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
      title: "Attack on Titan",
      author: "Hajime Isayama",
      description:
        "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
      dayupdate: "Thursday",
      image: "attack_on_titan.jpg",
    },
    {
      title: "Black Butler",
      author: "Yana Toboso",
      description:
        "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
      dayupdate: "Monday",
      image: "black_butler.jpg",
    },
    {
      title: "Black Clover",
      author: "Yūki Tabata",
      description:
        "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
      dayupdate: "Wednesday",
      image: "black_clover.jpg",
    },
    {
      title: "Detective Conan",
      author: "Gosho Aoyama",
      description:
        "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
      dayupdate: "Friday",
      image: "detective_conan.jpg",
    },
    {
      title: "Death Note",
      author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
      description:
        "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
      dayupdate: "Tuesday",
      image: "death_note.jpg",
    },
    {
      title: "Dragon Ball",
      author: "Akira Toriyama",
      description:
        "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
      dayupdate: "Sunday",
      image: "dragon_ball.jpg",
    },
    {
      title: "Gintama",
      author: "Hideaki Sorachi",
      description:
        "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
      dayupdate: "Saturday",
      image: "gintama.jpg",
    },
    {
      title: "Haikyuu!!",
      author: "Haruichi Furudate",
      description:
        "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
      dayupdate: "Monday",
      image: "haikyuu.jpg",
    },
    {
      title: "Fullmetal Alchemist",
      author: "Hiromu Arakawa",
      description:
        "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
      dayupdate: "Wednesday",
      image: "fullmetal_alchemist.jpg",
    },
    {
      title: "Hunter X Hunter",
      author: "Yoshihiro Togashi",
      description:
        "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
      dayupdate: "Tuesday",
      image: "hunter_x_hunter.jpg",
    },
    {
      title: "Naruto",
      author: "Masashi Kishimoto",
      description:
        "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
      dayupdate: "Friday",
      image: "naruto.jpg",
    },
    {
      title: "One Piece",
      author: "Eiichiro Oda",
      description:
        "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
      dayupdate: "Thursday",
      image: "one_piece.jpg",
    },
    {
      title: "One Punch Man",
      author: "ONE (story) and Yusuke Murata (art)",
      description:
        "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
      dayupdate: "Wednesday",
      image: "one_punch_man.jpg",
    },
  ];

  const animeData = [
    {
      title: "Attack on Titan",
      author: "Hajime Isayama",
      description:
        "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
      dayupdate: "Thursday",
      image: "attack_on_titan.jpg",
    },
    {
      title: "Black Butler",
      author: "Yana Toboso",
      description:
        "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
      dayupdate: "Monday",
      image: "black_butler.jpg",
    },
    {
      title: "Black Clover",
      author: "Yūki Tabata",
      description:
        "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
      dayupdate: "Wednesday",
      image: "black_clover.jpg",
    },
    {
      title: "Detective Conan",
      author: "Gosho Aoyama",
      description:
        "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
      dayupdate: "Friday",
      image: "detective_conan.jpg",
    },
    {
      title: "Death Note",
      author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
      description:
        "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
      dayupdate: "Tuesday",
      image: "death_note.jpg",
    },
    {
      title: "Dragon Ball",
      author: "Akira Toriyama",
      description:
        "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
      dayupdate: "Sunday",
      image: "dragon_ball.jpg",
    },
    {
      title: "Gintama",
      author: "Hideaki Sorachi",
      description:
        "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
      dayupdate: "Saturday",
      image: "gintama.jpg",
    },
    {
      title: "Haikyuu!!",
      author: "Haruichi Furudate",
      description:
        "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
      dayupdate: "Monday",
      image: "haikyuu.jpg",
    },
    {
      title: "Fullmetal Alchemist",
      author: "Hiromu Arakawa",
      description:
        "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
      dayupdate: "Wednesday",
      image: "fullmetal_alchemist.jpg",
    },
    {
      title: "Hunter X Hunter",
      author: "Yoshihiro Togashi",
      description:
        "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
      dayupdate: "Tuesday",
      image: "hunter_x_hunter.jpg",
    },
    {
      title: "Naruto",
      author: "Masashi Kishimoto",
      description:
        "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
      dayupdate: "Friday",
      image: "naruto.jpg",
    },
    {
      title: "One Piece",
      author: "Eiichiro Oda",
      description:
        "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
      dayupdate: "Thursday",
      image: "one_piece.jpg",
    },
    {
      title: "One Punch Man",
      author: "ONE (story) and Yusuke Murata (art)",
      description:
        "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
      dayupdate: "Wednesday",
      image: "one_punch_man.jpg",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                bgcolor: "#1f1f1f", // Warna latar belakang
                borderRadius: 1, // Border radius
                p: 1, // Padding
              }}
            >
              <Button
                sx={{
                  width: "100%", // Mengisi lebar tombol
                  position: "relative",
                  bgcolor: "#e91e63",
                  color: "#fff",
                  "&:hover": { bgcolor: "#c2185b" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 0, // Menghilangkan border radius agar tombol mengikuti border radius box
                }}
              >
                <Typography className="text">Instagram</Typography>
                <InstagramIcon className="icon" sx={{ display: "none" }} />
              </Button>
              <Button
                sx={{
                  width: "100%", // Mengisi lebar tombol
                  position: "relative",
                  bgcolor: "#3b5998",
                  color: "#fff",
                  "&:hover": { bgcolor: "#2a4887" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 0, // Menghilangkan border radius agar tombol mengikuti border radius box
                }}
              >
                <Typography className="text">Facebook</Typography>
                <FacebookIcon className="icon" sx={{ display: "none" }} />
              </Button>
              <Button
                sx={{
                  width: "100%", // Mengisi lebar tombol
                  position: "relative",
                  bgcolor: "#cddc39",
                  color: "#fff",
                  "&:hover": { bgcolor: "#afb42b" },
                  "&:hover .icon": { display: "inline-block" },
                  "&:hover .text": { display: "none" },
                  borderRadius: 0, // Menghilangkan border radius agar tombol mengikuti border radius box
                }}
              >
                <Typography className="text">Email</Typography>
                <EmailIcon className="icon" sx={{ display: "none" }} />
              </Button>
            </Box>

            {/* Box 2.2.2: Most Viewed Content */}
            <Box
              sx={{
                background: "linear-gradient(to bottom, #800000, #330000)",
                // borderRadius: 4,
                borderBottomLeftRadius: 20,
                p: 2,
              }}
            >
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
