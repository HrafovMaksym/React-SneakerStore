import React from "react";
import styles from "./Brand.module.scss";
const BrandFilter: React.FC = () => {
  const arr = [
    "Nike",
    "Jordan",
    "Nike SB",
    "Adidas",
    "Converse",
    "New Balance",
    "Puma",
  ];
  return (
    <div>
      <div className={styles.brand}>
        <h1 className={styles.title}>Бренд</h1>
        <ul>
          {arr.map((el) => {
            return (
              <li key={el}>
                <input className={styles.checkbox} type="checkbox" id={el} />
                <label htmlFor={el}>{el}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default BrandFilter;
