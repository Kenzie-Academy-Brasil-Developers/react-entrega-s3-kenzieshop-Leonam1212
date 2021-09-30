import Header from "../../components/header/index";
import { useSelector } from "react-redux";
import { Container } from "./style";
import Product from "../Product/index";
const HomePage = () => {
  const products = useSelector((store) => store.products);
  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};
export default HomePage;
