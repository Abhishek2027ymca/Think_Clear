// ScrollTopButton.jsx
import React, { useEffect, useState } from "react";
import styles from "./ScrollTopButton.module.css";
import { ArrowUp } from "lucide-react";

function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className={styles.scrollBtn} onClick={scrollToTop}>
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}

export default ScrollTopButton;