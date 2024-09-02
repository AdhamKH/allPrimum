// components/Services.js
import styles from "./style.module.scss";
import img1 from "../../../../assets/services/1.jpg";
import commercial from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (1).jpeg";
import residential from "../../../../assets/services/DALL·E 2024-09-02 10.40.17 - A modern residential home with solar panels installed on the roof. The house is situated in a sunny suburban neighborhood with green lawns and trees. .webp";
import Image from "next/image";
const servicesData = [
  {
    title: "Pm",
    description:
      "specializing in solar systems, overseeing the design, installation, and maintenance of solar energy projects, ensuring seamless execution and maximizing renewable energy efficiency.",
    image: img1,
  },
  {
    title: "Residential",
    description:
      "A residential solar system converts sunlight into electricity, reducing energy costs and environmental impact for homeowners by providing a sustainable, renewable power source directly to their homes.",
    image: residential,
  },
  {
    title: "commercial",
    description:
      "A commercial solar system provides businesses with a reliable and cost-effective renewable energy solution, reducing operational costs and carbon footprint while enhancing energy independence and sustainability.",
    image: commercial,
  },
  {
    title: "construction management",
    description:
      "Construction management involves planning, coordinating, and overseeing construction projects from inception to completion, ensuring they are delivered on time, within budget, and to the required quality standards.",
    image: img1,
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.content}>
        <div className={styles.servicesHeader}>
          <div className={styles.first}>
            <div>
              <div className={styles.squareBlue}></div> <p>our services</p>
            </div>
            <h2>The quality you expect, the service you deserve!</h2>
          </div>
          {/* <p>
            Sed posuere consectetur est at lobortis. Donec id elit non mi porta
            gravida at eget metus.
          </p> */}
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceImage}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.viewDetailsBtn}>View Details</button>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.scheduleBtn}>Schedule a Booking</button>
          <p className={styles.contactInfo}>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            +1123 456 7890
          </p>
        </div>
      </div>
    </section>
  );
}
