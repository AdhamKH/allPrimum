// components/RecentProjects.js
import styles from "./style.module.scss";
import img1 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (1).jpeg";
import img2 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM (2).jpeg";
import img3 from "../../../../assets/services/WhatsApp Image 2024-08-28 at 10.43.07 PM.jpeg";
import Image from "next/image";

const projectsData = [
  // {
  //   image: img1,
  //   alt: "Roofing Project",
  //   title: "Roofing",
  //   category: "Residential",
  // },
  {
    image: img1,
    alt: "Woodwork Project",
    title: "Hardwood Flooring",
    category: "Commercial",
  },
  {
    image: img2,
    alt: "Assembly Project",
    title: "Assembly",
    category: "Furniture",
  },
  {
    image: img3,
    alt: "Lighting Project",
    title: "Lighting Installation",
    category: "Residential",
  },
];

export default function RecentProjects() {
  return (
    <section className={styles.recentProjectsSection}>
      <div className={styles.header}>
        <h3>Recent Projects</h3>
        <h2>Inspiration for your next project</h2>
        {/* <div className={styles.icon}></div> */}
      </div>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.alt}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewAllBtn}>View All Projects</button>
    </section>
  );
}
