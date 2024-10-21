import React from "react";
import styles from "./CategoriesBlock.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  categorySelector,
  setCategoryId,
} from "../../redux/slices/filterSlice";

const CategoriesBlock: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(categorySelector);
  const arr = [
    "Все",
    "Повседневные",
    "Баскетбольные",
    "Скейтерские",
    "Беговыe",
    "Спортивные",
  ];
  const [names, setNames] = React.useState("Фильтрация");
  const [popUp, setPopUp] = React.useState<boolean>();
  const [activeCategor, setActiveCategor] = React.useState<boolean>();
  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
    setNames(arr[id]);
    setPopUp(!popUp);
    setActiveCategor(!activeCategor);
  };
  const onChangeCategory = () => {
    setPopUp(!popUp);
    setActiveCategor(!activeCategor);
  };
  return (
    <div>
      <div onClick={onChangeCategory} className={styles.categoryBlock}>
        <span>
          <b>{names}</b>
          <img
            width={10}
            height={10}
            src={activeCategor ? "/img/arrowUp.png" : "/img/arrowDown.png"}
            alt=""
          />
        </span>
      </div>
      {popUp && (
        <div className={styles.popCategory}>
          <ul>
            {arr.map((obj, i) => {
              return (
                <li
                  onClick={() => onClickCategory(i)}
                  className={
                    categoryId === i
                      ? styles.activeCategories
                      : styles.categories
                  }
                  key={i}
                >
                  {obj}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CategoriesBlock;
