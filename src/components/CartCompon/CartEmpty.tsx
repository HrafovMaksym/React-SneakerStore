import React from "react";
import styles from "./CartEmpty.module.scss";
import clearBox from "../../assets/img/clearCart.png";
import Back from "../../assets/img/arrowBack.png";
import { setDrawer } from "../../redux/slices/regulationSlice";
import { useDispatch } from "react-redux";
const CartEmpty: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Корзина</h2>
      <div className={styles.card}>
        <img src={clearBox} alt="clearBox" />
        <h3>Корзина пустая</h3>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <button
          onClick={() => dispatch(setDrawer(false))}
          className={styles.backBtn}
        >
          <img width={15} height={13} src={Back} alt="Next" />
          <span>Выбрать товар</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
