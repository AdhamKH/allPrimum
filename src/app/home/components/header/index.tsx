// components/Header.js

import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../../../assets/logo.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span className={styles.phone}>📞 +1 (123) 234 5678</span>
          <span className={styles.email}>✉️ info@example.com</span>
        </div>
        <div className={styles.logo}>
          {/* <img src="/logo.png" alt="Handy Buddy" /> */}
          <Image src={logo} alt="logo"></Image>
        </div>
        <div className={styles.booking}>
          <button className={styles.bookingButton}>SCHEDULE A BOOKING</button>
        </div>
      </div>
      <div className={styles.navBarContainer}>
        <nav className={styles.navBar}>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SERVICE AREAS</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">REVIEWS</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
