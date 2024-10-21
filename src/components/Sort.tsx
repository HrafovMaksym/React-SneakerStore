import React from "react";
import styles from "../scss/Modules/Sort.module.scss";
import { setSort } from "../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sortType);
  const [popUp, setPopUp] = React.useState<boolean>();
  const [activeSort, setActiveSort] = React.useState<boolean>();
  type SortArr = {
    name: string;
    sortProperty: string;
  };

  const onClickSort = () => {
    setPopUp(!popUp);
    setActiveSort(!activeSort);
  };
  const onClickSortActive = (el: SortArr) => {
    dispatch(setSort(el));
    setPopUp(!popUp);
    setActiveSort(!activeSort);
  };

  const spanRef = React.useRef<HTMLSpanElement>(null);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<number>(0);
  const arr: SortArr[] = [
    { name: "Новинки", sortProperty: "new" },
    { name: "Акционные", sortProperty: "sale" },
    { name: "Популярные", sortProperty: "rating" },
    { name: "По убыванию цены", sortProperty: "price" },
    { name: "По возрастанию цены", sortProperty: "-price" },
  ];
  React.useEffect(() => {
    if (spanRef.current) {
      const currentWidth = spanRef.current.offsetWidth;
      setWidth(currentWidth);
    }
  }, [popUp]);

  React.useEffect(() => {
    const handleClick = () => {
      setPopUp(false);
      setActiveSort(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        handleClick();
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} className={styles.root}>
      <div className={styles.sortBlock}>
        <span ref={spanRef} onClick={() => onClickSort()}>
          <b>{sort.name}</b>
          <img
            height={10}
            width={10}
            src={activeSort ? "/img/arrowUp.png" : "/img/arrowDown.png"}
            alt="Arrow"
          />
        </span>
      </div>
      {popUp && (
        <div style={{ width: width - 2 }} className={styles.sort_popUp}>
          <ul>
            {arr.map((el, i) => {
              return (
                <li onClick={() => onClickSortActive(el)} key={i}>
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Sort;
