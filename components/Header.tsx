import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/staff-on-tap-logo?placeholderIfAbsent=true&apiKey=placeholder"
              alt="Staff On TAP Logo"
              className={styles.logoImg}
            />
          </div>
          <div className={styles.logoText}>
            <div className={styles.companyName}>Staff On TAP</div>
            <div className={styles.tagline}>ready-to-work</div>
          </div>
        </div>

        <div className={styles.navigation}>
          <button className={styles.contactButton}>Contact Us</button>
          <button className={styles.signupButton}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
