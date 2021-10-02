import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route></Route>
    </Switch>
  );
};
export default Routes;
