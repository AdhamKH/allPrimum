import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../../assets/logo_white_transparent_background.png";
import workerImg from "../../../../assets/footer/1.jpg";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-primary`}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.column}>
            <Image src={logo} alt="Handy Buddy Logo" width={200} />
            <h4>Work smarter, not harder!</h4>
            <p>
              We are committed to the best quality in industrial handyman
              services.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Contact Info:</h4>
            <ul>
              {/* <li>
                <i className="fas fa-map-marker-alt"></i>324 King Street, FL,
                USA
              </li> */}
              <li>
                <span className={`${styles.phone} text-white`}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7V3M21 3H17M21 3L15 9M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <a href="tel:9172954742">(917) 295-4742</a>
                </span>
              </li>
              <li>
                <span className={`${styles.phone} text-white`}>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g clip-path="url(#clip0_429_11225)">
                        <path
                          d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M3 5L12 14L21 5"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11225">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                  <a href="mailto:  Support@Allpremiumhome.com ">
                    Support@Allpremiumhome.com
                  </a>
                </span>
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
              <button type="submit" className="bg-white ">
                <FaEnvelopeOpenText className="text-primary text-lg" />
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
          {/* 
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
