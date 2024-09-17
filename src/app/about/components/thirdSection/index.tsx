import styles from "./style.module.scss";

const HandymanServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>
                Count on us for all your handyman services.
              </h2>
              <p className={styles.description}>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Donec ullamcorper nulla non metus auctor
                fringilla.
              </p>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <a
              href="https://www.handybuddy.oxacor.com/booking/"
              className={styles.button}
            >
              Schedule A Booking
            </a>
          </div>
        </div>
        <div className={styles.rightColumn}></div>
      </div>
    </section>
  );
};

export default HandymanServicesSection;
