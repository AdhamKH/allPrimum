"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
// import logo from "../../assets/slidingPane/Logo_white.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import useInViewAnimationRepeat from "@/animation/useScrollRepeat";

import { useRouter } from "next/navigation";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";

type props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  images: any;
  selected: any;
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

const SlidingPane: React.FC<props> = ({
  open,
  setOpen,
  selected,
  images,
}: props) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const [openSingIn, setOpenSingIn] = React.useState<boolean>(false);
  const handlChange = () => {
    setOpenSingIn(!openSingIn);
  };
  const [openForm, setOpenForm] = React.useState<boolean>(false);
  const handleChangeForm = () => {
    setOpenForm(!openForm);
  };

  const [isLogged, setIsLogged] = useState(false);

  const [openOptions, setOpenOptions] = React.useState<boolean>(false);
  const { ref, controls } = useInViewAnimationRepeat();
  const handlClose = () => {
    setOpen?.(false);
    console.log("clicked");
  };
  console.log("Test", open, selected, images);
  React.useLayoutEffect(() => {
    if (pathname) handlClose();
  }, [pathname]);

  const isArabic = pathname.includes("/ar");
  const testImages = [
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      width: 240,
      height: 320,
      caption: "8H (gratisography.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      width: 320,
      height: 148,
      caption: "315H (gratisography.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      width: 320,
      height: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      width: 248,
      height: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
      width: 320,
      height: 113,
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      width: 313,
      height: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      width: 320,
      height: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
  ];
  const findArrOject = images?.find((e: any) => e?.id === selected);
  return (
    <>
      <div
        className={
          open
            ? `${styles.slidignOutterContainer}  ${styles.show}`
            : `${styles.slidignOutterContainer} ${isArabic && "arabic"}`
        }
      >
        <div className={`${styles.heading} ${isArabic && "arabic"}`}>
          <ul className={`${isArabic && "arabic"}`}>
            <li className={styles.liFont}>
              {/* <Image src={logo} alt="logo"></Image> */}
              {findArrOject?.title}
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
        <div className={`${styles.Sliding_content} ${isArabic && "arabic"}`}>
          <Gallery images={testImages} enableImageSelection={false} />
        </div>
      </div>
    </>
  );
};

export default SlidingPane;
