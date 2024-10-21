import React from "react";
import styles from "./DropDownCount.module.scss";
import Arrowup from "../../assets/img/arrowUp.png";
import ArrowDown from "../../assets/img/arrowDown.png";

const DropdownCountMenu: React.FC = () => {
  const countSneakers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState<number>(1);
  const dropDownCount = React.useRef<HTMLDivElement>(null);
  const onClickCount = (el: number) => {
    setOpen(!open);
    setCount(el);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropDownCount.current &&
      !event.composedPath().includes(dropDownCount.current)
    ) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropDownCount}
      className={`${styles.blockMenu} ${open ? styles.visible : ""}`}
    >
      <button onClick={() => setOpen(!open)} className={styles.buyBtn}>
        Count: {count}
      </button>
      <ul>
        {countSneakers.map((el, id) => (
          <li onClick={() => onClickCount(el)} key={id}>
            {el}
          </li>
        ))}
      </ul>
      <button className={styles.addBtn}>Buy</button>
    </div>
  );
};

export default DropdownCountMenu;
