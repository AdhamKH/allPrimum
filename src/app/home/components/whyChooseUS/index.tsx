"use client";
import styles from "./style.module.scss";
import smallImg from "../../../../assets/whyChooseUs/small.jpg";
import bigImg from "../../../../assets/whyChooseUs/big.jpg";
import Image from "next/image";
import { useState } from "react";
import SelectForm from "../selectForm";
const WhyChooseUs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <div className={styles.textSection}>
            <div className={styles.titleSection}>
              <span
                className={`${styles.badge} bg-primary text-text-primary p-2`}
              >
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
                <div className={`${styles.iconWrapper} bg-secondary`}>
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
                <div className={`${styles.iconWrapper} bg-secondary`}>
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
                    scheduling, ensuring timely and efficient project
                    progression.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={`${styles.iconWrapper} bg-secondary`}>
                  {/* <img src="/verified-icon.png" alt="Verified Professionals" /> */}
                </div>
                <div>
                  <h3>Top-Tier Project Management</h3>
                  <p>
                    <span> Support Throughout</span>: From initial contact to
                    post-sale operations, our team provides continuous support.
                  </p>
                  <p>
                    <span>Audit Systems</span>: We establish robust processes
                    and audit systems for quality assurance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className={`${styles.bookingButton} bg-primary`}
                // onClick={handleOpen}
              >
                BYLDr Partner
              </button>
              <button
                className={`${styles.bookingButton} bg-primary`}
                // onClick={handleOpen}
              >
                Submit your job
              </button>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.firstRow}>
              <Image src={bigImg} alt="Handyman" className={styles.mainImage} />
            </div>
            <div className={styles.secondRow}>
              <div className={`${styles.overlayBox} bg-primary`}>
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
      <SelectForm open={open} handleClose={handleClose} />
    </>
  );
};

export default WhyChooseUs;
