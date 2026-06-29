import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, followCount, title, chipLabel = "Follows" }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.bottomSection}>
        <Chip className={styles.chip} label={`${followCount} ${chipLabel}`} size="small" />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;