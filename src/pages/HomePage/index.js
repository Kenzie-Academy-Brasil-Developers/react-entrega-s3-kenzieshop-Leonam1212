import { useSelector } from "react-redux";
import { Container, Content, Header } from "./style";
import MiniDrawer from "../../pages/CartPage/index";
import Product from "../Product/index";
const HomePage = () => {
  const products = useSelector((store) => store.products);
  return (
    <Container>
      <Header>
        <p>
          KenzieShop - <span>Product Grid</span>
        </p>
      </Header>
      <Content>
        <MiniDrawer />
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
};
export default HomePage;
