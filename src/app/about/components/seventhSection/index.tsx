import React from "react";
import styles from "./sty.module.scss";

const WhyChooseUsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.columnLeft}>
          <div className={styles.iconList}>
            <ul>
              <li>
                <span className={styles.icon}>
                  <i className="fas fa-star"></i>
                </span>
                <span className={styles.text}>Why Choose Us</span>
              </li>
            </ul>
          </div>

          <div className={styles.heading}>
            <h2>
              We have a reliable work crew specializing in outdoor and indoor
              projects and home maintenance.
            </h2>
          </div>

          <div className={styles.divider}>
            <span className={styles.dividerIcon}>
              <i className="fas fa-wrench"></i>
            </span>
          </div>

          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <span className={styles.iconCircle}>
                <i className="fas fa-tools"></i>
              </span>
            </div>
            <div className={styles.iconContent}>
              <h4>16+ Years of Experience</h4>
              <p>
                Fusce dapibus, tellus ac cursus commodo tortor mauris
                condimentum nibh ut massa justo sit amet risus. Maecenas
                faucibus mollis interdum.
              </p>
            </div>
          </div>

          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <span className={styles.iconCircle}>
                <i className="fas fa-clock"></i>
              </span>
            </div>
            <div className={styles.iconContent}>
              <h4>24/7 Services</h4>
              <p>
                Fusce dapibus, tellus ac cursus commodo tortor mauris
                condimentum nibh ut massa justo sit amet risus. Maecenas
                faucibus mollis interdum.
              </p>
            </div>
          </div>

          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <span className={styles.iconCircle}>
                <i className="fas fa-check-circle"></i>
              </span>
            </div>
            <div className={styles.iconContent}>
              <h4>Verified Professionals</h4>
              <p>
                Fusce dapibus, tellus ac cursus commodo tortor mauris
                condimentum nibh ut massa justo sit amet risus. Maecenas
                faucibus mollis interdum.
              </p>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <a
              href="https://www.handybuddy.oxacor.com/booking"
              className={styles.button}
            >
              Schedule a Booking
            </a>
          </div>
        </div>

        <div className={styles.columnRight}>
          <img
            src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/bearded-handyman-lying-on-floor-near-toolbox-in-bathroom-qbc432qw2q1r955i8bw9gfgiur3bccbgh4288ew5y0.jpg"
            alt="Bearded handyman lying on floor near toolbox in bathroom"
            className={styles.mainImage}
          />

          <div className={styles.projectBox}>
            <h3>600+</h3>
            <p>Projects Completed</p>
          </div>

          <img
            src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/handyman-replacing-lightbulb-at-home-1-qbc432qt5gybdxkjmxtgdu8gd4zek4lqct1th1qtvc.jpg"
            alt="Handyman replacing lightbulb"
            className={styles.secondaryImage}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
