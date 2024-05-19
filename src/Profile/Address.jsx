import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress("");
  };

  const handleAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleDeleteAddress = (index) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Alamat akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedAddresses = addresses.filter((_, idx) => idx !== index);
        setAddresses(updatedAddresses);
        Swal.fire("Deleted!", "Alamat telah dihapus.", "success");
      }
    });
  };

  return (
    <>
      <Box p={2}>
        <Typography variant="h6">Daftar Alamat</Typography>
        <Divider sx={{ my: 2 }} />
        {addresses.map((address, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2, position: "relative" }}>
            <Typography>{address}</Typography>
            <IconButton
              aria-label="Hapus Alamat"
              onClick={() => handleDeleteAddress(index)}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth
            label="Alamat Baru"
            variant="outlined"
            value={newAddress}
            onChange={handleAddressChange}
            sx={{ mr: 1 }}
          />
          <IconButton
            color="primary"
            aria-label="Tambah Alamat"
            onClick={handleAddAddress}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Address;
