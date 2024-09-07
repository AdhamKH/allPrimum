// components/Header.js
"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../../../assets/logo-removebg-preview_prev_ui.png";
import Link from "next/link";
import SelectForm from "../selectForm";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <button
              className={`${styles.bookingButton}  bg-primary`}
              // onClick={handleOpen}
            >
              BYLDr Partner
            </button>
            <button
              className={`${styles.bookingButton}  bg-primary`}
              // onClick={handleOpen}
            >
              Submit your job
            </button>
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
      <SelectForm open={open} handleClose={handleClose} />
    </>
  );
};

export default Header;
