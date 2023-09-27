import { ReactNode } from "react";
import { ButtonAction } from './buttons';

export type ProductProps = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
  img: string | undefined;
  quantity: number  | undefined;
}

export type ParentStateProps = {
  counterClicked: boolean;
  setCounterClicked: (counterClicked: boolean) => void;
  cartItems?: ProductProps[];
  setCartItems: (cartItems: ProductProps[]) => void;
  buttonAction: ButtonAction;
}