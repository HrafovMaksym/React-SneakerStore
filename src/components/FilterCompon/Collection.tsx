import React from "react";
import styles from "./Collection.module.scss";

const CollectionFilter: React.FC = () => {
  const arr = [
    "Air VaporMax",
    "Air Force 1",
    "Air Huarache",
    "Air Jordan 1",
    "Air Jordan 11",
    "Air Jordan 13",
    "Air Jordan 2",
    "Air Jordan 3",
    "Air Jordan 5",
    "Air Jordan 6",
    "Air Jordan Retro Models",
    "Air Max 270",
    "Air Max 90",
    "Air Max 95",
    "Air Max Plus",
    "Air More Uptempo",
    "Blazer",
    "Converse CX",
    "Cortez",
    "Dub Zero",
    "Dunk",
    "Lebron",
    "Jordan Series",
    "Jordan Stay Loyal",
    "Jumpman Two Trey",
    "Nike Basketball",
    "Nike Crater",
  ];
  return (
    <div>
      <div className={styles.brand}>
        <h1 className={styles.title}>Коллекция</h1>
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
export default CollectionFilter;
