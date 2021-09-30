import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsTypes";
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];

    case REMOVE_PRODUCT:
      const { id } = action;
      const newProductsList = state.filter((product) => product.id !== id);

      return newProductsList;
    default:
      return state;
  }
};
export default cartReducer;
