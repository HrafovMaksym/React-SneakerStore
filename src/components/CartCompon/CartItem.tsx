import React from "react";
import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import {
  removeItem,
  itemsCartProps,
  minusItem,
  addItem,
} from "../../redux/slices/cartSlice";

const CartItem: React.FC<itemsCartProps> = ({
  id,
  title,
  price,
  imageUrl,
  size,
  cartGender,
  count,
}) => {
  const dispatch = useDispatch();

  const itemPrice = count * price;

  const onCLickRemove = () => {
    dispatch(removeItem({ size, id } as itemsCartProps));
  };
  const onClickPlus = () => {
    dispatch(addItem({ size, id } as itemsCartProps));
  };
  const onClickMinus = () => {
    dispatch(minusItem({ size, id } as itemsCartProps));
  };
  return (
    <div className={styles.card}>
      <div className={styles.flexCard}>
        <div className={styles.sneakerImg}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.properties}>
          <p className={styles.title}>{title}</p>
          <p className={styles.parametrs}>размер: {size}</p>
          <p className={styles.parametrs}>цена: {itemPrice} грн.</p>
          <div className={styles.count}>
            <button disabled={count === 1} onClick={onClickMinus}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill=" #1f2b3d"
                ></path>
              </svg>
            </button>
            <b>{count}</b>
            <button onClick={onClickPlus}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill=" #1f2b3d"
                ></path>
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill=" #1f2b3d"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <button onClick={onCLickRemove} className={styles.btnDelete}>
          <svg viewBox="0 0 24 24">
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
