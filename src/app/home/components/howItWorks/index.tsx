import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import companyLogo from "../../../../assets/howitWorks/CompanyLogo.png";
import icon1 from "../../../../assets/howitWorks/icon_white.png";

const steps = [
  {
    step: "STEP 1",
    title: "Welcome Calls",
    description:
      "We initiate contact with your customers, ensuring they feel supported from day one.",
    icon: icon1, // Replace with your actual icon paths
  },
  {
    step: "STEP 2",
    title: "Site Survey",
    description:
      "Detailed assessments to determine the best installation approach.",
    icon: icon1,
  },
  {
    step: "STEP 3",
    title: "Design",
    description:
      "Custom solar designs tailored to meet specific project requirements.",
    icon: icon1,
  },
  {
    step: "STEP 4",
    title: "Permitting",
    description:
      "We handle the acquisition and payment of permits, saving you time and hassle.",
    icon: icon1,
  },
  {
    step: "STEP 6",
    title: "Procurement ",
    description:
      "We assist in securing the necessary products for each solar job and thoroughly review the BOM list to ensure all items are accurate and aligned with project requirements.",
    icon: icon1,
  },
  {
    step: "STEP 5",
    title: "Scheduling",
    description:
      "Coordination with customers, vendors, and your team to ensure a smooth workflow.",
    icon: icon1,
  },

  {
    step: "STEP 7",
    title: "Installation",
    description:
      "Expertly managed installations by our network of trusted contractors.",
    icon: icon1,
  },
  {
    step: "STEP 8",
    title: "Interconnection",
    description:
      "Ensuring your solar systems are correctly integrated and operational.",
    icon: icon1,
  },
];
const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.header}>
        {/* <h3>Our Process</h3> */}
        <h2>service we provide</h2>
        <p>
          Sed posuere consectetur est at lobortis. Donec id elit non mi porta
          gravida at eget metus.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={`${styles.stepCard} bg-light`}>
            {/* <span className={styles.stepNumber}>{step.step}</span> */}
            <div className={styles.stepHeader}>
              <Image
                src={step.icon}
                alt={`${step.title} icon`}
                className={styles.stepIcon}
              />
            </div>
            <h3 className={`${styles.stepTitle} text-text-primary`}>
              {step.title}
            </h3>
            <p className={`${styles.stepDescription} text-text-primary`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.clients}>
        <p>We are trusted by thousands of clients</p>
        <div className={styles.clientLogos}>
          <Image src={companyLogo} alt="Renaisans logo" />
          <Image src={companyLogo} alt="Renaisans logo" />
          <Image src={companyLogo} alt="Renaisans logo" />
          <Image src={companyLogo} alt="Renaisans logo" />
          <Image src={companyLogo} alt="Renaisans logo" />
          <Image src={companyLogo} alt="Renaisans logo" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
