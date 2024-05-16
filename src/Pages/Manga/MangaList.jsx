import React, { useState } from "react";
import Header from "../../Components/Header";
import { Box, Button, Grid, Typography, Card, CardContent } from "@mui/material";
import { aniMangaList } from "../HomePage/Data";

const MangaList = () => {
  const [mangaList, setMangaList] = useState(aniMangaList.mangaData);
  const [sortType, setSortType] = useState(null);

  const handleSort = (type) => {
    if (type === "AtoZ" && sortType !== "AtoZ") {
      const sortedList = [...mangaList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMangaList(sortedList);
      setSortType("AtoZ");
    } else if (type === "ZtoA" && sortType !== "ZtoA") {
      const sortedList = [...mangaList].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setMangaList(sortedList);
      setSortType("ZtoA");
    }
  };

  return (
    <>
      <Header />
      <Box p={3} bgcolor="#f0f0f0">
        <Box
          bgcolor="#e0e0e0"
          borderRadius={4}
          p={2}
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Daftar Manga</Typography>
          <Box>
            <Button
              variant="contained"
              onClick={() => handleSort("AtoZ")}
              disabled={sortType === "AtoZ"}
              sx={{ mr: 1 }}
            >
              A to Z
            </Button>
            <Button
              variant="contained"
              onClick={() => handleSort("ZtoA")}
              disabled={sortType === "ZtoA"}
            >
              Z to A
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {mangaList.map((manga, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {manga.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {manga.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {manga.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MangaList;
