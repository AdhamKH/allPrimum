"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
import Image from "next/image";
import bg1 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (1).jpeg";
import bg2 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (2).jpeg";
import bg3 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM.jpeg";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import SelectForm from "../selectForm";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSlider = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const text = "Framer Motion is a really cool tool".split(" ");

  return (
    <div className={styles.sectionContainer}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <div className={styles.contentContainer}>
            <div className={styles.heroSlide}>
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <div>
                    <TypeAnimation
                      sequence={["Work smarter, not harder!"]}
                      wrapper="p"
                      speed={50}
                      repeat={1}
                      className={`${styles.pAnimate} text-3xl`}
                    />
                  </div>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Residential</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Commercial</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Nationwide</span>
                    </div>
                  </div>

                  <h1>
                    All of your{" "}
                    <span className="text-primary"> licensed contractors</span>{" "}
                    under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Process</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Management</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Same Price</span>
                    </div>
                  </div>
                  <p className="text-3xl font-serif">
                    Simplified management for consistent, reliable results,
                    every time!
                  </p>
                  <p>We manage all of your solar installs.</p>

                  <div className={styles.cta}>
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    <Link href={"/submitAJob"}>
                      <button
                        className={`${styles.bookingButton} bg-primary`}
                        // onClick={handleOpen}
                      >
                        Submit your job
                      </button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={bg1}
                  fill
                  className={styles.imgAnimation}
                  alt="background"
                  style={{ zIndex: "-1" }}
                ></Image>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.contentContainer}>
            <div className={styles.heroSlide}>
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <div>
                    <TypeAnimation
                      sequence={["Work smarter, not harder!"]}
                      wrapper="p"
                      speed={50}
                      repeat={1}
                      className={`${styles.pAnimate} text-3xl`}
                    />
                  </div>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Residential</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Commercial</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Nationwide</span>
                    </div>
                  </div>

                  <h1>
                    All of your{" "}
                    <span className="text-primary"> licensed contractors</span>{" "}
                    under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Process</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Management</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Same Price</span>
                    </div>
                  </div>
                  <p className="text-3xl font-serif">
                    Simplified management for consistent, reliable results,
                    every time!
                  </p>
                  <p>We manage all of your solar installs.</p>

                  <div className={styles.cta}>
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    <Link href={"/submitAJob"}>
                      <button
                        className={`${styles.bookingButton} bg-primary`}
                        // onClick={handleOpen}
                      >
                        Submit your job
                      </button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={bg2}
                  fill
                  className={styles.imgAnimation}
                  alt="background"
                  style={{ zIndex: "-1" }}
                ></Image>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.contentContainer}>
            <div className={styles.heroSlide}>
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <div>
                    <TypeAnimation
                      sequence={["Work smarter, not harder!"]}
                      wrapper="p"
                      speed={50}
                      repeat={1}
                      className={`${styles.pAnimate} text-3xl`}
                    />
                  </div>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Residential</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Commercial</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Nationwide</span>
                    </div>
                  </div>

                  <h1>
                    All of your{" "}
                    <span className="text-primary"> licensed contractors</span>{" "}
                    under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Process</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>One Management</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Same Price</span>
                    </div>
                  </div>
                  <p className="text-3xl font-serif">
                    Simplified management for consistent, reliable results,
                    every time!
                  </p>
                  <p>We manage all of your solar installs.</p>

                  <div className={styles.cta}>
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    <Link href={"/submitAJob"}>
                      <button
                        className={`${styles.bookingButton} bg-primary`}
                        // onClick={handleOpen}
                      >
                        Submit your job
                      </button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={bg3}
                  fill
                  className={styles.imgAnimation}
                  alt="background"
                  style={{ zIndex: "-1" }}
                ></Image>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <SelectForm open={open} handleClose={handleClose} />
    </div>
  );
};

export default HeroSlider;
