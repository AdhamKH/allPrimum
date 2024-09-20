import React from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/aboutUS/1.jpg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.textContent}>
        <h3>Experience the All Premium Solar Advantage</h3>
        <p>
          By choosing us, you gain peace of mind knowing that every aspect of
          your solar installation process is handled with expertise and
          precision. We’re here to ensure that your projects are completed
          quickly, efficiently, and to the highest standards, freeing you to
          focus on what you do best—growing your business.
        </p>
        <p>
          Let All All Premium Solar be your partner in success, delivering a
          hassle-free, streamlined solar installation process that meets and
          exceeds your expectations. Contact us today to learn more about how we
          can support your needs and drive your projects forward.
        </p>

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
        <ul>
          <li>
            <strong>Integrity</strong>: We uphold honesty, transparency, and
            trust in all our partnerships, delivering on our promises every
            time.
          </li>
          <li>
            <strong>Quality</strong>: Our commitment to excellence ensures every
            project is completed with the highest standards, from planning to
            execution.
          </li>
          <li>
            <strong>Efficiency</strong>: We streamline processes to maximize
            productivity and minimize delays, providing reliable and on-time
            solutions.
          </li>
          <li>
            <strong>Accountability</strong>: We take full responsibility for our
            work, ensuring clear communication and a results-driven approach.
          </li>
          <li>
            <strong>Innovation</strong>: We embrace new technologies and
            strategies to stay ahead of industry trends, continually improving
            our services.
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <i className="fas fa-heart"></i>
        <h4>Our Values</h4>
        <ul>
          <li>
            <strong>Customer-Centric</strong>: Our clients' success is our top
            priority, and we work closely with them to meet their goals.
          </li>
          <li>
            <strong>Collaboration</strong>: We believe in teamwork—both
            internally and with our partners—to achieve shared success.
          </li>
          <li>
            <strong>Sustainability</strong>: We are committed to promoting
            environmentally conscious practices that contribute to a greener
            future.
          </li>
          <li>
            <strong>Respect</strong>: We foster a culture of respect, valuing
            the contributions and perspectives of all our employees, partners,
            and clients.
          </li>
          <li>
            <strong>Professionalism</strong>: We maintain the highest standards
            of professionalism in everything we do, ensuring quality and
            reliability.
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <i className="fas fa-eye"></i>
        <h4>Our Vision</h4>
        <p>
          To be the leading nationwide provider of construction and project
          management services in the solar industry, recognized for our
          unwavering commitment to quality, innovation, and customer
          satisfaction. We aim to revolutionize the way solar projects are
          managed, creating a seamless experience that drives sustainable growth
          for our clients and partners. Through our professional network of
          vetted contractors, we aspire to set the industry standard for
          excellence in solar energy solutions.
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
