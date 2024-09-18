"use client";
import styles from "./style.module.scss";
import img1 from "../../../../assets/services/1.jpg";
import commercial from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (1).jpeg";
import residential from "../../../../assets/services/DALL·E 2024-09-02 10.40.17 - A modern residential home with solar panels installed on the roof. The house is situated in a sunny suburban neighborhood with green lawns and trees. .webp";
import Image from "next/image";
import SlidingPane from "@/conponents/slidingPane";
import { useState } from "react";
import SelectForm from "../selectForm";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Project management ",
    description:
      "Our project management team ensures the successful execution of every job from the point of sale to final interconnection approval. Our dedicated project managers handle every aspect, including intake, customer, surveyor and installer scheduling, product procurement, solar and battery installations, and the interconnection process.",
    image: img1,
  },
  {
    id: 2,

    title: "Operation management",
    description:
      "A residential solar system converts sunlight into electricity, reducing energy costs and environmental impact for homeowners by providing a sustainable, renewable power source directly to their homes.",
    image: residential,
  },

  {
    id: 3,

    title: "construction management",
    description:
      "With our esteemed operational staff, our entire team is dedicated to enhancing your experience. We prioritize communication and work diligently to streamline the entire process, ensuring smooth collaboration between all vendors and customers involved, right through to job completion.",
    image: img1,
  },
];

export default function Services() {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>();
  const handleSelect = (id: number) => {
    setSelected(id);
    setOpen(!open);
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <section className={styles.servicesSection}>
        <div className={styles.content}>
          <div className={styles.servicesHeader}>
            <div className={styles.first}>
              <div>
                <div className={`${styles.squareBlue} bg-primary`}></div>{" "}
                <p>who we are</p>
              </div>
              <h2>Are you searching for different states</h2>
            </div>
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
                <button
                  className={`${styles.viewDetailsBtn} bg-primary`}
                  onClick={() => handleSelect(service.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <Link href={"/BylderPartner"}>
              <button
                className={`${styles.scheduleBtn} bg-primary`}
                onClick={handleOpen}
              >
                BYLDr Partner
              </button>
            </Link>
            <Link href={"/submitAJob"}>
              <button
                className={`${styles.scheduleBtn} bg-primary`}
                onClick={handleOpen}
              >
                Submit your job
              </button>
            </Link>
            {/* <p className={styles.contactInfo}>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              +1123 456 7890
            </p> */}
          </div>
        </div>
        <SlidingPane
          open={open}
          setOpen={setOpen}
          images={servicesData}
          selected={selected}
        />
      </section>
      <SelectForm open={openModal} handleClose={handleClose} />
    </>
  );
}
