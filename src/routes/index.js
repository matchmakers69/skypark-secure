import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Trendy from "containers/Trendy";
import Search from "containers/Search";
import NotFound from "containers/NotFound";
import { constants } from "../constants";

const { HOME, TRENDY_GIFS, SEARCH_GIFS } = constants.routes;

const Routes = () => {
  const { pathname } = useLocation();
  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      <Route exact path={HOME} component={() => <Redirect to={TRENDY_GIFS} />} />
      <Route exact path={TRENDY_GIFS} component={Trendy} />
      <Route exact path={SEARCH_GIFS} component={Search} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
