import React from "react";
import RightArrow from "../../assets/right-arrow.svg";
import styles from "./NavButton.module.css";

function RightNavButton() {
  return (
    <img className={styles.navIcon} src={RightArrow} alt="next" />
  );
}

export default RightNavButton;