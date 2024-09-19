// components/Header.js
"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../../../assets/logo-removebg-preview_prev_ui.png";
import Link from "next/link";
import SelectForm from "../selectForm";
import { useState } from "react";
import SlidingPane from "../slidingPane";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.contactInfo}>
            <span className={`${styles.phone} text-primary`}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7V3M21 3H17M21 3L15 9M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                  stroke="rgb(149 187 61)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="tel:9172954742">(917) 295-4742</a>
            </span>
            <span className={`${styles.email} text-primary`}>
              ✉️ Support@Allpremiumhome.com
            </span>
          </div>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image src={logo} alt="logo"></Image>
            </Link>
          </div>
          <div className={`${styles.booking} flex gap-2 `}>
            <Link href={"/BylderPartner"}>
              <button className={`${styles.bookingButton}  bg-primary`}>
                BYLDr Partner
              </button>
            </Link>
            <Link href={"/submitAJob"}>
              <button className={`${styles.bookingButton}  bg-primary`}>
                Submit your job
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.navBarContainer}>
          <nav className={`${styles.navBar} bg-primary`}>
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              {/* <li>
                <a href="#">SERVICES</a>
              </li> */}
              <li>
                <a href="/about">ABOUT US</a>
              </li>
              {/* <li>
                <a href="#">SERVICE AREAS</a>
              </li> */}
              <li>
                <a href="#">PROJECTS</a>
              </li>
              {/* <li>
                <a href="#">PRICING</a>
              </li> */}
              {/* <li>
                <a href="#">REVIEWS</a>
              </li> */}
              {/* <li>
                <a href="#">PAGES</a>
              </li> */}
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className={styles.slidingNav}>
            <nav>
              <ul>
                <li>
                  <Link href={`/home/`}>
                    <Image
                      src={logo}
                      width={100}
                      height={100}
                      alt="logo"
                    ></Image>
                  </Link>
                </li>
                <li>
                  <button onClick={handleChange}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.50003 17.6344V16.1345H20.5V17.6344H3.50003ZM3.50003 12.7498V11.2499H20.5V12.7498H3.50003ZM3.50003 7.86521V6.36523H20.5V7.86521H3.50003Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <SlidingPane open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
