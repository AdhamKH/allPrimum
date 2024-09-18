"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import logo from "../../../../assets/logo_white_transparent_background.png";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import useInViewAnimationRepeat from "@/animation/useScrollRepeat";

type props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const navList = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};
export const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
const SlidingPane: React.FC<props> = ({ open, setOpen }: props) => {
  const pathname = usePathname();

  const { ref, controls } = useInViewAnimationRepeat();
  const handlClose = () => {
    setOpen?.(false);
  };

  React.useLayoutEffect(() => {
    if (pathname) handlClose();
  }, [pathname]);

  return (
    <>
      <div
        className={
          open
            ? `${styles.slidignOutterContainer}  ${styles.show}`
            : `${styles.slidignOutterContainer} `
        }
      >
        <div className={`${styles.heading} `}>
          <ul>
            <li className={styles.liFont}>
              <Image width={100} height={100} src={logo} alt="logo"></Image>
            </li>
            <li className={styles.liFont}>
              <button onClick={handlClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className={`${styles.Sliding_content} `}>
          <motion.ul
            ref={ref}
            variants={navList}
            initial="hidden"
            animate={controls}
            exit="hidden"
            // transition={{ duration: 5 }}
          >
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href={`/home/`}>Home</Link>
            </motion.li>
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href={`/about/`}>About us</Link>
            </motion.li>
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href={`/BylderPartner`}>BYLDr Partner</Link>
            </motion.li>
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href={`/submitAJob`}>Submit your job</Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default SlidingPane;
