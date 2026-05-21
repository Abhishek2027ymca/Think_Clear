// Loader.jsx
import React, { useEffect, useState } from "react";
import styles from "./LogoLoader.module.css";

import companyLogo from "../assets/Footer/logo.png";

function LogoLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimateOut(true);
    }, 2300);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        {/* Top Section */}
        <div
          className={`${styles.topSection} ${
            animateOut ? styles.topOpen : ""
          }`}
        ></div>

        {/* Bottom Section */}
        <div
          className={`${styles.bottomSection} ${
            animateOut ? styles.bottomOpen : ""
          }`}
        ></div>

        {/* Logo */}
        <div
          className={`${styles.logoBox} ${
            animateOut ? styles.logoZoom : ""
          }`}
        >
          <img
            src={companyLogo}
            alt="Company Logo"
            className={styles.logo}
          />
        </div>
      </div>
    );
  }

  return children;
}

export default LogoLoader;