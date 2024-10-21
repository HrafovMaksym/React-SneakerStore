import { itemsCartProps } from "../redux/slices/cartSlice";

export const calcTotalPrice = (items: itemsCartProps[]): number => {
  return items.reduce((acc, obj) => {
    return acc + obj.count * obj.price;
  }, 0);
};
