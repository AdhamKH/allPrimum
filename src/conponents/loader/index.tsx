import React from "react";
import styles from "./style.module.scss";
const Loader = () => {
  return (
    <div className={styles.container}>
      <div>Loading...</div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
