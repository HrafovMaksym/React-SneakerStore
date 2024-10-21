import React from "react";
import styles from "./Price.module.scss";
const Price: React.FC = () => {
  return (
    <div>
      <div className={styles.price}>
        <h1 className={styles.title}>Цена</h1>
        <span>
          <p>От</p>
          <input type="text" />
          <p>До</p>
          <input type="text" />
        </span>
      </div>
    </div>
  );
};

export default Price;
