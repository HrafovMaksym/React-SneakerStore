import React from "react";
import styles from "./LikedEmpty.module.scss";
import { Link } from "react-router-dom";
const LikedEmpty: React.FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.img}>💔</span>
      <h1>Favorite empty</h1>
      <p>
        Add a product you like to add it to your favorite notes. And do not look
        for this product in the future 🙂
      </p>
      <Link to={"/"}>
        <button>Add to favorites</button>
      </Link>
    </div>
  );
};

export default LikedEmpty;
