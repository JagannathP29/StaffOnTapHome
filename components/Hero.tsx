import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/hero-background?placeholderIfAbsent=true&apiKey=placeholder"
          alt="Coffee shop background"
          className={styles.backgroundImage}
        />
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.searchIcon}
            >
              <path
                d="M17.5 18L22 22.5"
                stroke="#3C1F42"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5C15.9706 20.5 20 16.4706 20 11.5Z"
                stroke="#3C1F42"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search your place"
              className={styles.searchInput}
            />
          </div>

          <button className={styles.getStartedButton}>Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
