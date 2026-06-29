import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./SongsSection.module.css";

function SongsSection() {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/genres").then((res) => {
      // API returns { data: [...] } or just an array — handle both
      const genreList = res.data.data || res.data;
      setGenres([{ key: "all", label: "All" }, ...genreList]);
    });

    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredSongs =
    selectedTab === 0
      ? songs
      : songs.filter(
          (song) =>
            song.genre?.key === genres[selectedTab]?.key
        );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Songs</h2>
      </div>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        TabIndicatorProps={{ style: { backgroundColor: "var(--color-primary)" } }}
        sx={{
          marginBottom: "16px",
          "& .MuiTab-root": {
            color: "var(--color-white)",
            textTransform: "none",
            fontFamily: "Poppins, sans-serif",
          },
          "& .Mui-selected": {
            color: "var(--color-primary) !important",
          },
        }}
      >
        {genres.map((genre, index) => (
          <Tab key={genre.key} label={genre.label} />
        ))}
      </Tabs>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <Carousel
          items={filteredSongs}
          renderItem={(song) => (
            <Card
              image={song.image}
              followCount={song.likes}
              title={song.title}
              chipLabel="Likes"
            />
          )}
        />
      )}
    </div>
  );
}

export default SongsSection;