import { itemsLikedProps } from "../redux/slices/likedSlice";

export const LikedItemsLS = () => {
  const data = localStorage.getItem("likedItems");
  const items: itemsLikedProps[] = data ? JSON.parse(data) : [];
  return items;
};
