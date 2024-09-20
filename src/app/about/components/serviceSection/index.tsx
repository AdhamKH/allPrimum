import styles from "./style.module.scss";

const ServiceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.innerContainer}>
            <section className={styles.contentSection}>
              <div className={styles.contentWrapper}>
                <div className={styles.textColumn}>
                  <div className={styles.headingWrapper}>
                    <h2 className={styles.heading}>
                      Clients love our service because nobody does it better.
                    </h2>
                  </div>
                  <div className={styles.textWrapper}>
                    {/* <p>
                      Sed posuere consectetur est at lobortis. Donec id elit non
                      mi porta gravida at eget metus. Fusce dapibus, tellus ac
                      cursus commodo, tortor mauris condimentum nibh. Sed
                      posuere consectetur est at lobortis. Donec id elit non mi
                      porta gravida at eget metus. Maecenas faucibus mollis
                      interdum.
                    </p> */}
                    <p>
                      We specialize in Construction management, both residential
                      and commercial. We emphasize on our processes for easy
                      streamlining, top notch workmanship, speediness to
                      completion and most importantly communication throughout
                      its process.
                    </p>
                  </div>
                  <ul className={styles.iconList}>
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="rgb(28, 63, 149)"
                            fill-rule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      Efficient Network
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="rgb(28, 63, 149)"
                            fill-rule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      Seamless Communication
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="rgb(28, 63, 149)"
                            fill-rule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      Permit Handling
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="rgb(28, 63, 149)"
                            fill-rule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      Scheduling & Coordination
                    </li>
                  </ul>
                </div>
                <div className={styles.imageColumn}>
                  <img
                    src="https://www.handybuddy.oxacor.com/wp-content/uploads/elementor/thumbs/couple-messing-around-with-paint--qbc433ops0kgxjunb9yf6hon17a13c4wgivn94nvrc.jpg"
                    alt="Couple messing around with paint."
                    className={styles.image}
                  />
                </div>
              </div>
            </section>

            <section className={styles.infoSection}>
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon}></span>
                <div className={styles.infoText}>
                  <h3>Our Principles</h3>
                  <ul>
                    <li>
                      <strong>Integrity</strong>: We uphold honesty,
                      transparency, and trust in all our partnerships,
                      delivering on our promises every time.
                    </li>
                    <li>
                      <strong>Quality</strong>: Our commitment to excellence
                      ensures every project is completed with the highest
                      standards, from planning to execution.
                    </li>
                    <li>
                      <strong>Efficiency</strong>: We streamline processes to
                      maximize productivity and minimize delays, providing
                      reliable and on-time solutions.
                    </li>
                    <li>
                      <strong>Accountability</strong>: We take full
                      responsibility for our work, ensuring clear communication
                      and a results-driven approach.
                    </li>
                    <li>
                      <strong>Innovation</strong>: We embrace new technologies
                      and strategies to stay ahead of industry trends,
                      continually improving our services.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon}></span>
                <div className={styles.infoText}>
                  <h3>Our Values</h3>
                  <ul>
                    <li>
                      <strong>Customer-Centric</strong>: Our clients' success is
                      our top priority, and we work closely with them to meet
                      their goals.
                    </li>
                    <li>
                      <strong>Collaboration</strong>: We believe in
                      teamwork—both internally and with our partners—to achieve
                      shared success.
                    </li>
                    <li>
                      <strong>Sustainability</strong>: We are committed to
                      promoting environmentally conscious practices that
                      contribute to a greener future.
                    </li>
                    <li>
                      <strong>Respect</strong>: We foster a culture of respect,
                      valuing the contributions and perspectives of all our
                      employees, partners, and clients.
                    </li>
                    <li>
                      <strong>Professionalism</strong>: We maintain the highest
                      standards of professionalism in everything we do, ensuring
                      quality and reliability.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon}></span>
                <div className={styles.infoText}>
                  <h3>Our Vision</h3>
                  <p>
                    To be the leading nationwide provider of construction and
                    project management services in the solar industry,
                    recognized for our unwavering commitment to quality,
                    innovation, and customer satisfaction. We aim to
                    revolutionize the way solar projects are managed, creating a
                    seamless experience that drives sustainable growth for our
                    clients and partners. Through our professional network of
                    vetted contractors, we aspire to set the industry standard
                    for excellence in solar energy solutions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
