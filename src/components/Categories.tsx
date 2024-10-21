import React from "react";
import styles from "../scss/Modules/Categories.module.scss";
import CategoriesString from "./CategoryCompon/CategoriesString";
import CategoriesBlock from "./CategoryCompon/CategoriesBlock";
const Categories: React.FC = () => {
  return (
    <div>
      <div className={styles.string}>
        <CategoriesString />
      </div>
      <div className={styles.block}>
        <CategoriesBlock />
      </div>
    </div>
  );
};
export default Categories;
