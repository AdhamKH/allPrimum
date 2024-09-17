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
              📞 +1 (123) 234 5678
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
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="/about">ABOUT US</a>
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
