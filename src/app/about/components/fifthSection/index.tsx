import styles from "./style.module.scss";

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.statBox}>
          <div className={styles.statContent}>
            <div className={styles.counter}>
              <span className={styles.value}>800</span>+
            </div>
            <div className={styles.label}>Happy Clients</div>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statContent}>
            <div className={styles.counter}>
              <span className={styles.value}>20</span>+
            </div>
            <div className={styles.label}>Service Locations</div>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statContent}>
            <div className={styles.counter}>
              <span className={styles.value}>2000</span>+
            </div>
            <div className={styles.label}>Completed Projects</div>
          </div>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statContent}>
            <div className={styles.counter}>
              <span className={styles.value}>16</span>+
            </div>
            <div className={styles.label}>Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
