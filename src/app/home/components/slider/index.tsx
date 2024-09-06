"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./style.module.scss";
import Image from "next/image";
import bg1 from "../../../../assets/slider1.jpg";
import bg2 from "../../../../assets/slider2.jpg";
import bg3 from "../../../../assets/slider3.jpg";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
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
                <div className={styles.badges}>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>PROFESSIONAL</span>
                  </div>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>TRUSTWORTHY</span>
                  </div>
                </div>
                <h1>
                  Our
                  <span className={styles.spanWrapper}>
                    <span>handyman</span>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>{" "}
                    </svg> */}
                  </span>
                  services are all under one roof.
                </h1>
                <p>
                  It’s your home. Not just any handyman will do. We’re not happy
                  until the work’s done right — backed by a one-year guarantee.
                </p>
                <div className={styles.cta}>
                  <button className={styles.bookingButton}>
                    Submit your job / BYLDr Partner
                  </button>
                  <span>📞 +1 2135347694</span>
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
                <div className={styles.badges}>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>PROFESSIONAL</span>
                  </div>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>TRUSTWORTHY</span>
                  </div>
                </div>
                <h1>Our handyman services are all under one roof.</h1>
                <p>
                  It’s your home. Not just any handyman will do. We’re not happy
                  until the work’s done right — backed by a one-year guarantee.
                </p>
                <div className={styles.cta}>
                  <button className={styles.bookingButton}>
                    Submit your job / BYLDr Partner
                  </button>
                  <span>📞 +1 2135347694</span>
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
                <div className={styles.badges}>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>PROFESSIONAL</span>
                  </div>
                  <div>
                    <div className={styles.square}></div>{" "}
                    <span>TRUSTWORTHY</span>
                  </div>
                </div>
                <h1>Our handyman services are all under one roof.</h1>
                <p>
                  It’s your home. Not just any handyman will do. We’re not happy
                  until the work’s done right — backed by a one-year guarantee.
                </p>
                <div className={styles.cta}>
                  <button className={styles.bookingButton}>
                    Submit your job / BYLDr Partner
                  </button>
                  <span>📞 +1 2135347694</span>
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
  );
};

export default HeroSlider;
