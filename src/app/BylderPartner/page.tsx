import React from "react";
import styles from "./style.module.scss";
import FormContainer from "./form";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FormContainer />
      </div>
    </div>
  );
};

export default page;
