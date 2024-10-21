import React from "react";
import styles from "../scss/Modules/Cart.module.scss";
import Next from "../assets/img/strelochka.svg";

import Bin from "../assets/img/bin.png";
import { useSelector, useDispatch } from "react-redux";
import {
  regulationDrawerSelector,
  setDrawer,
} from "../redux/slices/regulationSlice";
import {
  cartItemsSelector,
  clearItem,
  itemsCartProps,
  totalCountSelector,
  totalPriceSelector,
} from "../redux/slices/cartSlice";

import CartItem from "./CartCompon/CartItem";
import CartEmpty from "./CartCompon/CartEmpty";

const Cart: React.FC = () => {
  const items = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const dispatch = useDispatch();

  const count = useSelector(totalCountSelector);

  const onClickClear = () => {
    dispatch(clearItem());
  };

  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !event.composedPath().includes(drawerRef.current)
      ) {
        dispatch(setDrawer(false));
      }
    };
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      return document.body.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div ref={drawerRef} className={styles.drawer}>
        <div className={styles.container}>
          {count ? (
            <>
              <span className={styles.dFlex}>
                <h2>Корзина</h2>
                <button
                  onClick={() => dispatch(setDrawer(false))}
                  className={styles.btnClose}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                  </svg>
                </button>
              </span>
              <div onClick={onClickClear} className={styles.clear}>
                <p> Очистить корзину</p>
                <img width={17} height={17} src={Bin} alt="" />
              </div>
              <div className={styles.items}>
                {items.map((obj: itemsCartProps) => (
                  <CartItem {...obj} key={obj.id} />
                ))}
              </div>
              <div>
                <span className={styles.flexInfo}>
                  <p className={styles.infoBuy}>
                    Количество пар: <span>{count}</span>
                  </p>
                  <p className={styles.infoBuy}>
                    Итого: <span>{totalPrice} грн.</span>
                  </p>
                </span>
                <button className={styles.buyBtn}>
                  <span>Оформить заказ</span>
                  <img width={15} height={13} src={Next} alt="Next" />
                </button>
              </div>
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
