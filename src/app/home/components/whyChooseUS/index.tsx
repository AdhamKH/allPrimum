import styles from "./style.module.scss";
import smallImg from "../../../../assets/whyChooseUs/small.jpg";
import bigImg from "../../../../assets/whyChooseUs/big.jpg";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <div className={styles.titleSection}>
            <span className={styles.badge}>
              Why Choose All All Premium Solar
            </span>
            <h2>
              We have a reliable work crew specializing in outdoor and indoor
              projects and home maintenance.
            </h2>
            <hr className={styles.divider} />
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                {/* <Image src={smallImg} alt="Experience" /> */}
              </div>
              <div>
                <h3>Hassle-Free Contractor Management</h3>
                <p>
                  <span> Efficient Network</span>: We connect you with
                  pre-approved, reliable contractors.
                </p>
                <p>
                  <span> Seamless Communication</span>: Acting as the liaison
                  between sales orgs/EPCs and installers, we ensure clear and
                  efficient communication.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                {/* <Image src={bigImg} alt="24/7 Services" /> */}
              </div>
              <div>
                <h3>Streamlined Operations</h3>
                <p>
                  <span>Permit Handling</span> : We take care of the paperwork
                  and costs associated with permits, so you don’t have to
                </p>
                <p>
                  <span>Scheduling & Coordination</span>: We manage all
                  scheduling, ensuring timely and efficient project progression.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                {/* <img src="/verified-icon.png" alt="Verified Professionals" /> */}
              </div>
              <div>
                <h3>Top-Tier Project Management</h3>
                <p>
                  <span> Support Throughout</span>: From initial contact to
                  post-sale operations, our team provides continuous support.
                </p>
                <p>
                  <span>Audit Systems</span>: We establish robust processes and
                  audit systems for quality assurance.
                </p>
              </div>
            </div>
          </div>
          <button className={styles.bookingButton}>
            Submit your job / BYLDr Partner
          </button>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.firstRow}>
            <Image src={bigImg} alt="Handyman" className={styles.mainImage} />
          </div>
          <div className={styles.secondRow}>
            <div className={styles.overlayBox}>
              <h4>4000 +</h4>
              <p>Jobs installed</p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={smallImg}
                alt="Project"
                className={styles.secondaryImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
