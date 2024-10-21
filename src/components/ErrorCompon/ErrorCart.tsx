import React from "react";
import styles from "./ErrorCart.module.scss";
import { Link } from "react-router-dom";
const ErrorCart = () => {
  return (
    <div className={styles.root}>
      <h1>ERROR 404</h1>
      <p>Unable to load page check the internet connection and try later 😞</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ErrorCart;
