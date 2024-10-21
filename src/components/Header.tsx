import React from "react";
import Buttons from "./HeaderCompon/Buttons";
import Input from "./HeaderCompon/Input";
import Logo from "../assets/img/logo.png";

import styles from "../scss/Modules/Header.module.scss";

import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import {
  regulationUserSelector,
  setDrawer,
  setUser,
} from "../redux/slices/regulationSlice";
import { Link } from "react-router-dom";
import {
  cartItemsSelector,
  totalCountSelector,
} from "../redux/slices/cartSlice";
import { likedItemsSelector } from "../redux/slices/likedSlice";

const Header: React.FC = () => {
  const count = useSelector(totalCountSelector);
  const user = useSelector(regulationUserSelector);
  const likedItems = useSelector(likedItemsSelector);
  const items = useSelector(cartItemsSelector);

  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [count]);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.flex_header}>
          <Link to="/" className={styles.header_navbar}>
            <img width={50} height={50} src={Logo} alt="Logo" />
            <span>
              <h2>All Stars</h2>
              <p>The best sneakers</p>
            </span>
          </Link>
          <Buttons />
          <Input />
          <div className={styles.headerRight}>
            <button onClick={() => dispatch(setUser(!user))}>
              <svg className={styles.userImg} viewBox="0 0 32 32">
                <g>
                  <circle cx="16" cy="8" r="7" />
                  <path d="M28,31A12,12,0,0,0,4,31Z" />
                </g>
              </svg>
            </button>
            <User />
            <Link to="/Liked">
              <button className={styles.likeBtn}>
                <svg viewBox="0 0 256 256" className={styles.likedImg}>
                  <path
                    d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                    fill={likedItems.length > 0 ? "white" : "none"}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
                {likedItems.length > 0 && (
                  <span className={styles.likedItems}>
                    <b>{likedItems.length}</b>
                  </span>
                )}
              </button>
            </Link>
            <button
              className={styles.cartBtn}
              onClick={() => dispatch(setDrawer(true))}
            >
              <svg className={styles.cartImg} viewBox="0 0 256 256">
                <path
                  d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle
                  cx="80"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle
                  cx="184"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {count > 0 && (
                <span className={styles.items}>
                  <b>{count}</b>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
