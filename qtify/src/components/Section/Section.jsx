import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiUrl, chipLabel = "Follows", showToggle = true }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true); // ← default TRUE (carousel)

  useEffect(() => {
  axios
    .get(apiUrl)
    .then((response) => setAlbums(response.data))
    .catch((error) => {
      console.error("Error fetching albums:", error);
      setAlbums([]); 
    })
    .finally(() => setLoading(false));
}, [apiUrl]);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {showToggle && (
          <button className={styles.collapseButton} onClick={toggleCollapse}>
            {isCollapsed ? "Show All" : "Collapse"}  {/* ← "Show All" when carousel shown */}
          </button>
        )}
      </div>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : isCollapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <Card
              image={album.image}
              followCount={album.follows}
              title={album.title}
              chipLabel={chipLabel}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              followCount={album.follows}
              title={album.title}
              chipLabel={chipLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;