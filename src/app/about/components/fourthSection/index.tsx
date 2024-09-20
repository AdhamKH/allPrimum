import styles from "./style.module.scss";

const ExpertTeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <section className={styles.innerSection}>
            <div className={styles.textWrapper}>
              <h2 className={styles.heading}>Our Expert Team</h2>
              <div className={styles.divider}></div>
              <p className={styles.description}>
                Our passion for fixing never dies. We are committed to providing
                top-notch All Premium Solar services. A skilled All Premium
                Solar is available to help.
              </p>
            </div>
          </section>

          <div className={styles.teamWrapper}>
            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/her-designs-are-as-cool-as-she-is-portrait-of-a-young-female-designer-in-a-modern-office--qbc433oqzvcwjk0dq6tlakj02jhnr3cmcbgtej53sg.jpg"
                alt="Min Frias"
                className={styles.image}
              />
              <h3 className={styles.name}>Min Frias</h3>
              <p className={styles.role}>Founder</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/handsome-businessman-working-in-office-qbc434ml6pe6v5z0kp87v2agnxd0ysgcog4avt3pm8.jpg"
                alt="Frank Vang"
                className={styles.image}
              />
              <h3 className={styles.name}>Frank Vang</h3>
              <p className={styles.role}>Director</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/attractive-business-woman-qbc432qwt1bm7y1qvoeyq2rjh5maje8w06tbx96hyo.jpg"
                alt="Mary Parker"
                className={styles.image}
              />
              <h3 className={styles.name}>Mary Parker</h3>
              <p className={styles.role}>House Cleaner</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/happy-young-male-office-employee-working-on-laptop-computer-qbc434ml6pe6v5z0kp87v2agnxd0ysgcog4avt3pm8.jpg"
                alt="Eugene Hite"
                className={styles.image}
              />
              <h3 className={styles.name}>Eugene Hite</h3>
              <p className={styles.role}>Cleaning Auditor</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/business-with-exuberance-portrait-of-young-office-workers-sitting-at-their-computers--qbc433oqzvcwjk0dq6tlakj02jhnr3cmcbgtej53sg.jpg"
                alt="Laila Junayed"
                className={styles.image}
              />
              <h3 className={styles.name}>Laila Junayed</h3>
              <p className={styles.role}>Office Cleaner</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/young-girl-holding-tablet-and-using-laptop-at-office-qbc434ml6pe6v5z0kp87v2agnxd0ysgcog4avt3pm8.jpg"
                alt="Samantha Milner"
                className={styles.image}
              />
              <h3 className={styles.name}>Samantha Milner</h3>
              <p className={styles.role}>Accounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeamSection;
