import React from "react";
import FormContainer from "./components/form";
import styles from "./style.module.scss";
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
