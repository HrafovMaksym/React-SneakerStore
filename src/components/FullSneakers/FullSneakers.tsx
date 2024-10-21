import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./FullSneakers.module.scss";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikedItems,
  itemsLikedProps,
  likedItemIdSelector,
} from "../../redux/slices/likedSlice";
import Skeleton from "./Skeleton";
import ErrorCart from "../ErrorCompon/ErrorCart";
const FullSneakers: React.FC = () => {
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
  const { id } = useParams();
  const findItem = useSelector(likedItemIdSelector(id));
  const [sneakers, setSneakers] = React.useState<PropsSneaker>();
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchSneakers() {
      try {
        {
          const { data } = await axios.get<PropsSneaker>(
            `https://665b346d003609eda4602972.mockapi.io/items/` + id
          );
          setSneakers(data);
        }
      } catch (error) {
        setError(true);
      }
    }

    fetchSneakers();
  }, [id]);

  const onClickLike = () => {
    let likedCartObj;
    if (sneakers) {
      likedCartObj = {
        id: sneakers.id,
        title: sneakers.title,
        price: sneakers.price,
        gender: sneakers.gender,
        imageUrl: sneakers.imageUrl,
        newImageUrl: sneakers.newImageUrl,
      };
    } else {
      alert("Error can`t add this item to favorites =(");
    }
    dispatch(addLikedItems(likedCartObj as itemsLikedProps));
  };

  const skeleton = [...new Array(1)].map((_, id) => <Skeleton key={id} />);

  const title = sneakers?.title;
  const gender = sneakers?.gender;

  if (error) {
    return <ErrorCart />;
  }
  return (
    <>
      {sneakers ? (
        <div className={styles.container}>
          <BreadCrumbs />
          <div className={styles.content}>
            <div>
              <span className={styles.flexTitle}>
                <h3 className={styles.title}>{title}</h3>

                <div>
                  <svg
                    onClick={onClickLike}
                    viewBox="0 0 256 256"
                    className={styles.likedImg}
                  >
                    <path
                      d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                      fill={findItem ? "black" : "white"}
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                  <svg
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 16.707031 2.2929688 L 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 L 6 18 L 8 18 L 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 L 16.707031 11.707031 L 21.414062 7 L 16.707031 2.2929688 z M 2 8 L 2 9 L 2 19 C 2 20.64497 3.3550302 22 5 22 L 19 22 C 20.64497 22 22 20.64497 22 19 L 22 18 L 22 17 L 20 17 L 20 18 L 20 19 C 20 19.56503 19.56503 20 19 20 L 5 20 C 4.4349698 20 4 19.56503 4 19 L 4 9 L 4 8 L 2 8 z"></path>
                  </svg>
                </div>
              </span>
              <p className={styles.gender}>{gender}</p>
              <div className={styles.flexWrapper}>
                <span className={styles.hoverScale}>
                  <img
                    className={styles.mainImg}
                    src={sneakers.imageUrl}
                    alt=""
                  />
                </span>
                <DropdownMenu {...sneakers} />
              </div>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
              <h5>More COntetn</h5>
            </div>
          </div>
        </div>
      ) : (
        skeleton
      )}
    </>
  );
};

export default FullSneakers;
