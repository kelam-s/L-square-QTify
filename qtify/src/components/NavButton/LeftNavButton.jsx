import React from "react";
import LeftArrow from "../../assets/left-arrow.svg";
import styles from "./NavButton.module.css";

function LeftNavButton() {
  return (
    <img className={styles.navIcon} src={LeftArrow} alt="previous" />
  );
}

export default LeftNavButton;