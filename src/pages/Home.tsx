import React from "react";

import Addition from "../components/Addition";
import SneakerCard from "../components/SneakerCard/SneakerCard";
import Skeleton from "../components/SneakerCard/Skeleton";
import Error from "../components/ErrorCompon/Error";
import { useSelector } from "react-redux";
import {
  SneakerItems,
  fetchSneakers,
  sneakerItemsSelector,
  statusSelector,
} from "../redux/slices/sneakerSlice";

import { useAppDispatch } from "../redux/appHooks";
import { searchQuerySelector } from "../redux/slices/filterSlice";

const Home: React.FC = () => {
  const searchValue = useSelector(searchQuerySelector);
  const items = useSelector(sneakerItemsSelector);
  const status = useSelector(statusSelector);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(
      fetchSneakers({
        search,
      })
    );
  }, [searchValue]);
  const skeleton = [...new Array(8)].map((_, i) => {
    return <Skeleton key={i} />;
  });

  const sneaker = items.map((obj: SneakerItems) => {
    return <SneakerCard {...obj} key={obj.id} />;
  });
  return (
    <>
      <div className="content">
        <div className="flex_filtration" style={{ maxHeight: "60px" }}>
          <h2>All sneakers</h2>
        </div>
        <div className="d-flex-content">
          <Addition />
          {status !== "error" ? (
            <div className="wrapper">
              {status === "loading" ? skeleton : sneaker}
            </div>
          ) : (
            <Error />
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
