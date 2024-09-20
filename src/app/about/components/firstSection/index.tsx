import styles from "./style.module.scss";

const AboutUsFirst = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.content}>
            <div className={styles.headingWrapper}>
              <h1 className={`${styles.heading} text-primary`}>About Us</h1>
            </div>
            <div className={styles.subheadingWrapper}>
              <div className={styles.subheading}>
                Your friendly neighborhood All Premium Solar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsFirst;
