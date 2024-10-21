import React from "react";
import styles from "./CategoriesString.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  categorySelector,
  setCategoryId,
} from "../../redux/slices/filterSlice";

const CategoriesString: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(categorySelector);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const arr = [
    "Все",
    "Повседневные",
    "Баскетбольные",
    "Скейтерские",
    "Беговыe",
    "Спортивные",
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.stringCotegories}>
        {arr.map((obj, i) => {
          return (
            <li
              onClick={() => onChangeCategory(i)}
              className={
                categoryId === i ? styles.activeCategories : styles.categories
              }
              key={i}
            >
              {obj}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CategoriesString;
