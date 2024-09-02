import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../../assets/logo2.png";
import workerImg from "../../../../assets/footer/1.jpg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.column}>
            <Image src={logo} alt="Handy Buddy Logo" />
            <h4>Best Handyman Services</h4>
            <p>
              We are committed to the best quality in industrial handyman
              services.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Contact Info:</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>324 King Street, FL,
                USA
              </li>
              <li>
                <i className="fas fa-phone"></i>+1 123 456 7890
              </li>
              <li>
                <i className="fas fa-envelope"></i>info@example.com
              </li>
            </ul>
            <h4>Open Hours:</h4>
            <ul>
              <li>
                <i className="far fa-clock"></i>Mon – Sat: 8 am – 8 pm
              </li>
              <li>
                <i className="far fa-clock"></i>Sunday: Closed
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Newsletter:</h4>
            <p>
              Subscribe to our newsletter to get our latest updates and news.
            </p>
            <form className={styles.form}>
              <input type="email" placeholder="Email address" />
              <button type="submit">
                <i className="fas fa-envelope-open-text"></i>
              </button>
            </form>
            <div className={styles.socialIcons}>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Instagram:</h4>
            <div className={styles.gallery}>
              <Image src={workerImg} alt="Gallery Image 1" />
              <Image src={workerImg} alt="Gallery Image 2" />
              <Image src={workerImg} alt="Gallery Image 3" />
              <Image src={workerImg} alt="Gallery Image 4" />
              <Image src={workerImg} alt="Gallery Image 5" />
              <Image src={workerImg} alt="Gallery Image 6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
