import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsTypes";

export const addToCart = (product) => ({ type: ADD_PRODUCT, product });

export const removeFromCart = (id) => ({ type: REMOVE_PRODUCT, id });
