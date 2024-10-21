import React from "react";
import styles from "./FullSneakers.module.scss";
import ArrowUp from "../../assets/img/arrowUp.png";
import ArrowDown from "../../assets/img/arrowDown.png";
import DropdownCountMenu from "./DropdownCountMenu";
import { useDispatch } from "react-redux";
import { addItem, itemsCartProps } from "../../redux/slices/cartSlice";
import { setDrawer } from "../../redux/slices/regulationSlice";
type PropsFullSneakers = {
  priceItem: number | undefined;
  sizeItem: number[] | undefined;
};
type PropsSneaker = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  newImageUrl: string;
  gender: string;
  cartGender: string;
  sale: number;
};
const DropdownMenu: React.FC<PropsSneaker> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  newImageUrl,
  gender,
}) => {
  const countSneakers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [itemSize, setItemSize] = React.useState<string | number>("All");
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState<number>(1);
  const dropDownCount = React.useRef<HTMLDivElement>(null);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const proofWasClick = React.useRef(true);
  const totalPrice = count * price;
  const onClickToogle = (el: number) => {
    setOpenPopup(!openPopup);
    setItemSize(el);
  };
  const onClickOpen = () => {
    setOpenPopup(!openPopup);
  };
  const onClickCount = (el: number) => {
    setOpen(!open);
    setCount(el);
  };
  const handleClickOutside2 = (event: MouseEvent) => {
    if (
      dropDownCount.current &&
      !event.composedPath().includes(dropDownCount.current)
    ) {
      setOpen(false);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (proofWasClick.current) {
      if (
        dropDownRef.current &&
        !event.composedPath().includes(dropDownRef.current)
      ) {
        setOpenPopup(false);
      }
    }
  };

  const onClickBuy = () => {
    let size;
    if (typeof itemSize === "string") {
      proofWasClick.current = false;
      return setOpenPopup(!open);
    } else {
      proofWasClick.current = true;
      size = itemSize;
    }

    dispatch(setDrawer(true));
    dispatch(
      addItem({ id, price, imageUrl, title, size, count } as itemsCartProps)
    );
  };
  React.useEffect(() => {
    document.body.addEventListener("click", handleClickOutside2);
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.body.removeEventListener("click", handleClickOutside2);
    };
  }, []);
  return (
    <div>
      <div
        ref={dropDownRef}
        className={`${styles.sizeList} ${openPopup ? styles.visible : ""}`}
      >
        <button className={styles.menuSize} onClick={onClickOpen}>
          <b>Size:</b>
          <b>
            {itemSize}
            <img src={openPopup ? ArrowUp : ArrowDown} alt="Arrow" />
          </b>
        </button>
        <ul>
          {sizes?.map((el, id) => (
            <li onClick={() => onClickToogle(el)} key={id}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.blockBuy}>
        <p>Buy Now for</p>
        <b>{count == 1 ? price : totalPrice} $</b>
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
          <button onClick={onClickBuy} className={styles.addBtn}>
            Buy
          </button>
        </div>
        <span>
          <a>Order</a>
          <a>Availability in stores</a>
        </span>
      </div>
      <div className={styles.addInfo}>
        <span>
          <a>Favorite List</a>
          <a>Favorite List</a>
        </span>
        <span>
          <a>Favorite List</a>
          <a>Favorite List</a>
        </span>
      </div>
    </div>
  );
};

export default DropdownMenu;
