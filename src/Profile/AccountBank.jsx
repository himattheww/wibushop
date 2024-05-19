import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AccountBank = () => {
  const [showAddBankForm, setShowAddBankForm] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankAccounts, setBankAccounts] = useState([]);

  const handleAddBank = () => {
    setShowAddBankForm(true);
  };

  const handleBankSelectChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleSaveBank = () => {
    // Check if bank name and account number are not empty
    if (selectedBank && accountNumber) {
      // Add new bank account to the list
      setBankAccounts([
        ...bankAccounts,
        { bankName: selectedBank, accountNumber: accountNumber },
      ]);
      // Clear form fields
      setSelectedBank("");
      setAccountNumber("");
      // Hide add bank form
      setShowAddBankForm(false);
    } else {
      // Show error message if bank name or account number is empty
      alert("Please select a bank and enter account number.");
    }
  };

  return (
    <>
      <Box p={2}>
        <Typography variant="h5">Rekening Bank</Typography>
        {showAddBankForm ? (
          <Paper sx={{ p: 2, mt: 2, position: "relative" }}>
            <Typography variant="h6">Mau tambah rekening apa?</Typography>
            <IconButton
              aria-label="Close"
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={() => setShowAddBankForm(false)}
            >
              <CloseIcon />
            </IconButton>
            <Select
              fullWidth
              value={selectedBank}
              onChange={handleBankSelectChange}
              sx={{ mt: 2 }}
            >
              <MenuItem value="">Pilih Bank</MenuItem>
              <MenuItem value="Bank A">Bank A</MenuItem>
              <MenuItem value="Bank B">Bank B</MenuItem>
              {/* Add more banks as needed */}
            </Select>
            <TextField
              fullWidth
              label="Nomor Rekening"
              variant="outlined"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveBank}
              sx={{ mt: 2 }}
            >
              Tambah Rekening
            </Button>
          </Paper>
        ) : (
          <Tooltip title="Tambahkan Rekening Lain" arrow>
            <IconButton
              onClick={handleAddBank}
              sx={{ mt: 2, color: "primary" }}
            >
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
        {/* Display existing bank accounts */}
        {bankAccounts.map((account, index) => (
          <Paper key={index} sx={{ p: 2, mt: 2 }}>
            <Typography variant="subtitle1">
              Nama Bank: {account.bankName}
            </Typography>
            <Typography variant="subtitle1">
              Nomor Rekening: {account.accountNumber}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default AccountBank;
