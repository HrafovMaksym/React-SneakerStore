import React from "react";
import styles from "./LikedCard.module.scss";
import Bin from "../../assets/img/trash.png";
import { useDispatch, useSelector } from "react-redux";
import {
  itemsLikedProps,
  likedItemIdSelector,
  likedItemsSelector,
  removeLikedItems,
} from "../../redux/slices/likedSlice";
const LikedCard: React.FC<itemsLikedProps> = ({
  id,
  title,
  price,
  imageUrl,
  newImageUrl,
  gender,
}) => {
  const [isHover, setHover] = React.useState(false);
  const onFocus = () => {
    return setHover(true);
  };
  const onUnFocus = () => {
    return setHover(false);
  };

  const HoverStyle = isHover ? `url(${newImageUrl})` : `url(${imageUrl})`;
  const dispatch = useDispatch();
  const items = useSelector(likedItemsSelector);
  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("likedItems", json);
  }, [items]);
  const onClickUnlike = () => {
    dispatch(removeLikedItems(id));
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={onFocus}
      onMouseLeave={onUnFocus}
    >
      <div
        className={styles.photo}
        style={{
          backgroundImage: HoverStyle,
        }}
      >
        <button onClick={onClickUnlike} className={styles.likedBtn}>
          <img width={20} height={20} src={Bin} alt="bin" />
        </button>
      </div>
      <p>{title}</p>
      <div className={styles.gender}>
        <p>{gender}</p>
        <b>{price} грн.</b>
      </div>
    </div>
  );
};

export default LikedCard;
