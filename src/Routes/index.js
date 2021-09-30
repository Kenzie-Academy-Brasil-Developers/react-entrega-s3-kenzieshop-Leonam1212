import { Switch, Route } from "react-router-dom";
import Cart from "../pages/CartPage";
// mportar as pages aqui
import HomePage from "../pages/HomePage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path = "/">
          <HomePage /> 
          <Cart />
      </Route>
      <Route></Route>
    </Switch>
  );
};
export default Routes