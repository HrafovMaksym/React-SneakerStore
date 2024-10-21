import { itemsCartProps } from "../redux/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

export const CartItemsLS = () => {
  const data = localStorage.getItem("cart");
  const items: itemsCartProps[] = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  return { items, totalPrice };
};
