import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemoved = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;
  return (
    <section>
      {!isRemoved && <img src={image} />}
      <div>
        <h3 style={{ fontSize: "13px" }}>{name}</h3>
        <span style={{ fontSize: "13px" }}>R$ {price}</span>
      </div>
      <p style={{ fontSize: "13px" }}>
        Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
        consectetur adip
      </p>
      {isRemoved ? (
        <button
          style={{
            fontSize: "13px",
            color: "#fff",
            fontWeight: "bold",
            background: "rgba(61, 61, 61,1.0)",
          }}
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remove
        </button>
      ) : (
        <button
          style={{ border: "2px solid #fff", background: "transparent" }}
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Add
        </button>
      )}
    </section>
  );
};
export default Product;
