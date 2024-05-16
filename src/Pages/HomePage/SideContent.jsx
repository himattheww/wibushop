import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Mengganti VisibilityIcon dengan WhatshotIcon

const SideContent = () => {
  const mostViewedContent = Array.from({ length: 10 }, (_, index) => ({
    title: `Most Viewed Title ${index + 1}`,
    description: `Description for Most Viewed Content ${index + 1}`,
  }));

  return (
    <>
      {/* Box 2.2: Side Content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
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
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
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
    </>
  );
};

export default SideContent;
