"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styles from "./style.module.scss";

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.column}>
          <section className={styles.innerSection}>
            <div className={styles.innerContainer}>
              <div className={styles.iconList}>
                <ul className={styles.iconListItems}>
                  <li className={styles.iconListItem}>
                    <span className={styles.icon}>
                      <i className="fas fa-star"></i>
                    </span>
                    <span className={styles.text}>Testimonials</span>
                  </li>
                </ul>
              </div>
              <div className={styles.heading}>
                <h2>Our clients' satisfaction is important to us.</h2>
              </div>
              <div className={styles.divider}></div>
            </div>
          </section>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className={styles.reviewsCarousel}
            breakpoints={{
              0: {
                slidesPerView: 1, // One slide for small screens
              },
              // Larger screens (like tablets and up)
              768: {
                slidesPerView: 2, // Two slides for larger screens
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.reviewCard}>
                <a href="#">
                  <div className={styles.reviewContent}>
                    <img
                      src="https://www.handybuddy.oxacor.com/wp-content/uploads/handsome-businessman-working-in-office-300x300.jpg"
                      alt="Louis Fox"
                      className={styles.reviewImage}
                    />
                    <cite>
                      <span>Louis Fox</span>
                      <div className={styles.rating}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className={styles.handle}>@louisfoxdemo</span>
                    </cite>
                  </div>
                </a>
                <p>
                  Vestibulum id ligula porta felis euismod semper. Nullam id
                  dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit
                  libero, a pharetra augue.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviewCard}>
                <a href="#">
                  <div className={styles.reviewContent}>
                    <img
                      src="https://www.handybuddy.oxacor.com/wp-content/uploads/happy-young-male-office-employee-working-on-laptop-computer-300x300.jpg"
                      alt="David Nash"
                      className={styles.reviewImage}
                    />
                    <cite>
                      <span>David Nash</span>
                      <div className={styles.rating}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className={styles.handle}>@mianashdemo</span>
                    </cite>
                  </div>
                </a>
                <p>
                  Vestibulum id ligula porta felis euismod semper. Nullam id
                  dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit
                  libero, a pharetra augue.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reviewCard}>
                <a href="#">
                  <div className={styles.reviewContent}>
                    <img
                      src="https://www.handybuddy.oxacor.com/wp-content/uploads/handsome-businessman-working-in-office-300x300.jpg"
                      alt="Louis Fox"
                      className={styles.reviewImage}
                    />
                    <cite>
                      <span>Louis Fox</span>
                      <div className={styles.rating}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className={styles.handle}>@louisfoxdemo</span>
                    </cite>
                  </div>
                </a>
                <p>
                  Vestibulum id ligula porta felis euismod semper. Nullam id
                  dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit
                  libero, a pharetra augue.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviewCard}>
                <a href="#">
                  <div className={styles.reviewContent}>
                    <img
                      src="https://www.handybuddy.oxacor.com/wp-content/uploads/happy-young-male-office-employee-working-on-laptop-computer-300x300.jpg"
                      alt="David Nash"
                      className={styles.reviewImage}
                    />
                    <cite>
                      <span>David Nash</span>
                      <div className={styles.rating}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className={styles.handle}>@mianashdemo</span>
                    </cite>
                  </div>
                </a>
                <p>
                  Vestibulum id ligula porta felis euismod semper. Nullam id
                  dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit
                  libero, a pharetra augue.
                </p>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlide components for additional testimonials */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
