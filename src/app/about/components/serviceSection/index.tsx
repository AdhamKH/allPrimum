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
                      mi porta gravida at eget metus.
                    </p>
                    <p>
                      Etiam porta sem malesuada magna mollis euismod. Cum sociis
                      natoque penatibus et magnis dis parturient montes.
                    </p>
                  </div>
                  <ul className={styles.iconList}>
                    <li>
                      <i className={styles.icon}></i> Enhanced privacy and
                      safety.
                    </li>
                    <li>
                      <i className={styles.icon}></i> Professional executive
                      staffs.
                    </li>
                    <li>
                      <i className={styles.icon}></i> Next-gen innovation
                      solutions.
                    </li>
                    <li>
                      <i className={styles.icon}></i> Topnotch quality services.
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
