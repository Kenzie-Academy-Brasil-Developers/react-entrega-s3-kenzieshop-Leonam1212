import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";

const Product = ({ product, isRemoved = false }) => {
  const dispatch = useDispatch();

  const { id, name, price } = product;
  return (
    <div>
      <h2>{name}</h2>
      <span>{price}</span>
      {isRemoved ? (
        <button onClick={() => dispatch(removeFromCart(id))}>Remover</button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>Adicionar</button>
      )}
    </div>
  );
};
export default Product;
