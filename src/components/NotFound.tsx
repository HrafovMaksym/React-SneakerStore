import React from "react";
import styles from "../scss/Modules/NotFound.module.scss";
const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        Ничего не найдено <span>😕</span>
      </h1>
      <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};
export default NotFound;
