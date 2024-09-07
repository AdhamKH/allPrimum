"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./style.module.scss";
import Image from "next/image";
import bg1 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (1).jpeg";
import bg2 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (2).jpeg";
import bg3 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM.jpeg";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import SelectForm from "../selectForm";
import Link from "next/link";

const HeroSlider = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>PROFESSIONAL</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>TRUSTWORTHY</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>Nationwide</span>
                    </div>
                  </div>
                  <h1>
                    All of your licensed contractors under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>
                  <p>Work smarter, not harder!</p>
                  <p>
                    Sliding words: Survey, Engineering, Permits, Scheduling,
                    Procurement, Installation, Interconnection.
                  </p>
                  <p>
                    We take your project from zero to hero! Stay in business!
                  </p>
                  <div className={styles.cta}>
                    {/* <Link href={"/submitAJob"}> */}
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    {/* </Link> */}
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
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>PROFESSIONAL</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>TRUSTWORTHY</span>
                    </div>
                  </div>
                  <h1>
                    All of your licensed contractors under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>{" "}
                  <p> Have us manage your installs.</p>
                  <p>
                    We are your all in one house Project Management and
                    Construction Management nationwide!!
                  </p>
                  <div className={styles.cta}>
                    {/* <Link href={"/submitAJob"}> */}
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    {/* </Link> */}
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
                  <div className={styles.badges}>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>PROFESSIONAL</span>
                    </div>
                    <div>
                      <div className={`${styles.square} bg-primary`}></div>{" "}
                      <span>TRUSTWORTHY</span>
                    </div>
                  </div>
                  <h1>
                    All of your licensed contractors under one roof with
                    <span className={`${styles.spanWrapper}`}>
                      <span>All Premium!</span>
                    </span>
                  </h1>
                  <p>
                    Get organized! Get professional! Go nationwide with All
                    Premium.
                  </p>
                  <p>For all of your Residential and Commercial projects.</p>
                  <div className={styles.cta}>
                    {/* <Link href={"/submitAJob"}> */}
                    <button
                      className={`${styles.bookingButton} bg-primary`}
                      // onClick={handleOpen}
                    >
                      BYLDr Partner
                    </button>
                    {/* </Link> */}
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
      </Swiper>
      <SelectForm open={open} handleClose={handleClose} />
    </>
  );
};

export default HeroSlider;
