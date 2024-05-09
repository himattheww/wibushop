import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import logoWibushop from "../Assets/Logo/logo2.webp";
import { toast } from "react-hot-toast";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked!");
    handleMenuClose();
  };

  const handleDownloadClick = () => {
    toast.success("Still on development"); // Menampilkan pesan toast saat tombol di klik
  };

  const handleAppMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleAppMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#333", borderBottom: "2px solid #ff4081" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Ikon Aplikasi */}
          <IconButton
            sx={{ color: "#fff", marginRight: "16px" }}
            onClick={handleAppMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logoWibushop}
              alt="Logo"
              style={{
                height: "40px",
                marginRight: "16px",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#ff4081", fontWeight: "bold" }}
            >
              Berwibuwa
            </Typography>
          </Typography>
        </div>

        {/* Kotak Pencarian */}
        <TextField
          variant="outlined"
          placeholder="Cari Anime/Manga"
          sx={{
            color: "#fff",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& .MuiOutlinedInput-input": {
              paddingTop: "8px",
              paddingBottom: "8px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Tombol History */}
        <IconButton sx={{ color: "#fff" }}>
          <HistoryIcon />
        </IconButton>

        {/* Tombol Bookmark */}
        <IconButton sx={{ color: "#fff" }}>
          <BookmarkIcon />
        </IconButton>

        {/* Tombol Unduh Aplikasi */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#ff4081",
            color: "#fff",
            "&:hover": { backgroundColor: "#ff4081" },
          }}
          onClick={handleDownloadClick}
        >
          <DownloadIcon sx={{ marginRight: "8px" }} />
          <Typography variant="body2">Download</Typography>
        </Button>

        {/* Ikon Profil */}
        <IconButton
          sx={{ color: "#fff", "&:hover": { backgroundColor: "transparent" } }}
          onClick={handleMenuOpen}
        >
          <ProfileIcon />
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleProfileClick}>Profil</MenuItem>
          <MenuItem onClick={handleMenuClose}>Pengaturan</MenuItem>
          <MenuItem onClick={handleMenuClose}>Keluar</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
