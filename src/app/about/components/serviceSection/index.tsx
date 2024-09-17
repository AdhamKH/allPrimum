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
                    <p>
                      Sed posuere consectetur est at lobortis. Donec id elit non
                      mi porta gravida at eget metus. Fusce dapibus, tellus ac
                      cursus commodo, tortor mauris condimentum nibh. Sed
                      posuere consectetur est at lobortis. Donec id elit non mi
                      porta gravida at eget metus. Maecenas faucibus mollis
                      interdum.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Donec id elit non
                      mi porta gravida at eget metus. Fusce dapibus, tellus ac
                      cursus commodo, tortor mauris condimentum nibh. Sed
                      posuere consectetur est at lobortis. Donec id elit non mi
                      porta gravida at eget metus. Maecenas faucibus mollis
                      interdum.
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
                      Enhanced privacy and safety.
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
                      Professional executive staffs.
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
                      Next-gen innovation solutions.
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
                      Topnotch quality services.
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
                  <p>
                    Fusce dapibus, tellus ac cursus commodo torto nibh ut massa
                    justo sit amet risus maecenas faucibus.
                  </p>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon}></span>
                <div className={styles.infoText}>
                  <h3>Our Values</h3>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo torto nibh ut massa
                    justo sit amet risus maecenas faucibus.
                  </p>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon}></span>
                <div className={styles.infoText}>
                  <h3>Our Vision</h3>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo torto nibh ut massa
                    justo sit amet risus maecenas faucibus.
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
