import React from "react";
import LikedCard from "../components/LikedCardCompon/LikedCard";
import styles from "../components/LikedCardCompon/LikedCard.module.scss";
import { useSelector } from "react-redux";
import LikedEmpty from "../components/LikedCardCompon/LikedEmpty";

import {
  itemsLikedProps,
  likedItemsSelector,
} from "../redux/slices/likedSlice";
import { searchQuerySelector } from "../redux/slices/filterSlice";

const Liked: React.FC = () => {
  const items = useSelector(likedItemsSelector);
  // const searchValue = useSelector(searchQuerySelector);

  // .filter((obj: itemsLikedProps) => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // })
  const likedSneakers = items.map((obj: itemsLikedProps) => (
    <LikedCard {...obj} key={obj.id} />
  ));
  if (items.length === 0) {
    return <LikedEmpty />;
  }
  return (
    <>
      <div className="content">
        <div className={styles.flexWrap}>
          <h2 className="title_content">Favorite sneakers</h2>
          <p className={styles.likedItems}>items: {items.length}</p>
        </div>
        <div className="d-flex-row">
          <div className={styles.rootWraper}>{likedSneakers}</div>
        </div>
      </div>
    </>
  );
};
export default Liked;
