import { addToCart, removeFromCart } from "./actions";
import { toast } from "react-toastify";

export const addToCartThunk = (product) => (dispatch, getStore) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(product));
    toast.success("Produto adicionado ao carrinho")
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter(product => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));

  dispatch(removeFromCart(list))
  toast.error("Produto removido do carrinho")


};
