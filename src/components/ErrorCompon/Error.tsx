import React from "react";
import styles from "./Error.module.scss";
const Error: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Product not found</h1>
      <p>
        The product you are looking for might not exist on our website or it has
        already been sold out 😞
      </p>
    </div>
  );
};

export default Error;
