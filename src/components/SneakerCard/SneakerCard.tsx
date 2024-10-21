import React from "react";
import styles from "../../scss/Modules/SneakerCard.module.scss";
import {
  addItem,
  cartItemIdSelector,
  itemsCartProps,
  totalItemCountSelector,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikedItems,
  likedItemIdSelector,
  likedItemsSelector,
} from "../../redux/slices/likedSlice";
import { Link } from "react-router-dom";

export type SneakerPropsCard = {
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
const SneakerCard: React.FC<SneakerPropsCard> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  newImageUrl,
  gender,
  cartGender,
  sale,
}) => {
  const dispatch = useDispatch();

  const [activeSize, setActiveSize] = React.useState<number>(0);

  const findItem = useSelector(totalItemCountSelector(id));
  const findLikedItem = useSelector(likedItemIdSelector(id));
  const likedItems = useSelector(likedItemsSelector);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(likedItems);
      localStorage.setItem("likedItems", json);
    }
    isMounted.current = true;
  }, [likedItems]);

  const addedCount = findItem ? findItem : 0;

  const addedLikedItem = () => {
    const likedObj = {
      id,
      title,
      price,
      imageUrl,
      newImageUrl,
      gender,
    };
    dispatch(addLikedItems(likedObj));
  };

  const addedItem = () => {
    const item: itemsCartProps = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
      gender,
      cartGender,
      count: 0,
    };
    dispatch(addItem(item));
  };
  const [isHover, setHover] = React.useState(false);
  const onFocus = () => {
    return setHover(true);
  };
  const onUnFocus = () => {
    return setHover(false);
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addedLikedItem();
  };
  const HoverStyle = isHover ? `url(${newImageUrl})` : `url(${imageUrl})`;

  return (
    <div className={styles.root}>
      <div
        className={styles.card}
        onMouseEnter={onFocus}
        onMouseLeave={onUnFocus}
      >
        <Link to={`Sneakers/${id}`}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: HoverStyle,
            }}
          >
            <button onClick={handleButtonClick} className={styles.btnLiked}>
              <img
                width={20}
                height={20}
                src={findLikedItem ? "/img/likedItem.png" : "/img/likeItem.png"}
                alt="liked"
              />
            </button>
          </div>

          <p className={styles.title}>{title}</p>
        </Link>

        <div className={styles.flexProps}>
          <div className={styles.gender}>
            <p>{gender}</p>
            <b className={styles.salePrice}>{sale} </b>
            <b>{price} грн.</b>
          </div>

          <button onClick={addedItem} className={styles.btnAdd}>
            <span>Добавить</span>
            {addedCount > 0 && <b>{addedCount}</b>}
          </button>
        </div>
        <div className={styles.sizes}>
          <ul>
            <span>us</span>
            {sizes.map((el: number, i: number) => {
              return (
                <li
                  className={
                    activeSize === i ? styles.SizeActive : styles.sizes
                  }
                  onClick={() => setActiveSize(i)}
                  key={i}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SneakerCard;
