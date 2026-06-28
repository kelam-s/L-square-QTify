import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, apiUrl }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error))
      .finally(() => setLoading(false));
  }, [apiUrl]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.collapseButton}>Collapse</button>
      </div>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              followCount={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;