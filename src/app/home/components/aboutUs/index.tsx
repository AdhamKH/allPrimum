import React from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/aboutUS/1.jpg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.textContent}>
        <h3>Experience the All Premium Contractors Advantage</h3>
        <p>
          By choosing us, you gain peace of mind knowing that every aspect of
          your solar installation process is handled with expertise and
          precision. We’re here to ensure that your projects are completed
          quickly, efficiently, and to the highest standards, freeing you to
          focus on what you do best—growing your business.
        </p>
        <p>
          Let All Premium Contractors be your partner in success, delivering a
          hassle-free, streamlined solar installation process that meets and
          exceeds your expectations. Contact us today to learn more about how we
          can support your needs and drive your projects forward.
        </p>
        {/* <ul className={styles.highlights}>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Dedicated to quality handyman work.</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Home repairs handled with care.</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Accurate fix, satisfaction guaranteed.</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Save money on your repair projects.</span>
          </li>
        </ul> */}
        <a href="#more-about-us" className={styles.aboutButton}>
          More About Us
        </a>
      </div>

      <div className={styles.imageContent}>
        <Image src={img} alt="About Us Image" />
      </div>
    </section>
  );
};

const PrinciplesValuesVision = () => {
  return (
    <section className={styles.cardsSection}>
      <div className={styles.card}>
        <i className="fas fa-star"></i>
        <h4>Our Principles</h4>
        <p>
          We continuously invest in cutting-edge technology and innovative
          practices to lead the solar energy market and deliver top-tier
          solutions to our clients.
        </p>
      </div>
      <div className={styles.card}>
        <i className="fas fa-heart"></i>
        <h4>Our Values</h4>
        <p>
          Striving for excellence in every project, we are dedicated to
          delivering superior quality and performance in all our solar
          solutions.
        </p>
      </div>
      <div className={styles.card}>
        <i className="fas fa-eye"></i>
        <h4>Our Vision</h4>
        <p>
          To contribute significantly to the global fight against climate change
          by expanding access to reliable and affordable solar energy for all.
        </p>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <>
      <AboutUs />
      <PrinciplesValuesVision />
    </>
  );
};

export default AboutUsSection;
