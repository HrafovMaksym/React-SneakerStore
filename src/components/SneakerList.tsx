import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SneakerCard from "../components/SneakerCard/SneakerCard";
import Addition from "../components/Addition";
import Skeleton from "../components/SneakerCard/Skeleton";
import Error from "../components/ErrorCompon/Error";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/appHooks";
import {
  fetchGenderSneakers,
  sneakerGenderSelector,
  statusGenderSelector,
} from "../redux/slices/genderSlice";
import { filterSelector } from "../redux/slices/filterSlice";
import { SneakerItems } from "../redux/slices/sneakerSlice";
type ListProps = {
  gender: string;
};
const SneakerList: React.FC<ListProps> = ({ gender }) => {
  const { categoryId, sortType, searchValue } = useSelector(filterSelector);
  const items = useSelector(sneakerGenderSelector);
  const status = useSelector(statusGenderSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(fetchGenderSneakers({ sortBy, order, category, search }));
  }, [categoryId, sortType, searchValue]);

  const skeleton = [...new Array(8)].map((_, i) => {
    return <Skeleton key={i} />;
  });
  const sneaker = items
    .filter((obj) => obj.gender === gender)
    .map((obj: SneakerItems, i) => {
      return <SneakerCard key={i} {...obj} />;
    });

  return (
    <>
      <div className="content">
        <div className="flex_filtration " style={{ maxHeight: "60px" }}>
          <h2 className="title_content">{gender}</h2>
          <Categories />
          <Sort />
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
export default SneakerList;
