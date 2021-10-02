import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;

        return [...state, product];


    case REMOVE_PRODUCT:
      const { list } = action;
      return list;
    default:
      return state;
  }
};
export default cartReducer;
