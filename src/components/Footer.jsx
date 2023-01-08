import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
  const { footer } = styles;
  return (
    <footer className={footer}>
      109B01756 謝育霖
      <br />
      109B01765 吳彥宸
    </footer>
  );
};

export default Footer;
