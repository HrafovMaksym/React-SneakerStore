import React from "react";
import styles from "./Sizes.module.scss";
const Sizes: React.FC = () => {
  const [activeSize, setActiveSize] = React.useState("");
  const arr = [
    "3.5",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
  ];
  return (
    <div>
      <div className={styles.blockSizes}>
        <h1 className={styles.title}>Размеры</h1>
        <ul>
          <div className={styles.wrapper}>
            {arr.map((el, i) => {
              return (
                <li
                  key={i}
                  //@ts-ignore
                  onClick={() => setActiveSize(i)}
                  //@ts-ignore
                  className={activeSize === i ? styles.AtiveSize : styles.sizes}
                >
                  {el}
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Sizes;
