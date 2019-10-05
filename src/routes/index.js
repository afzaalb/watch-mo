import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Home from "../containers/home";
import Item from "../containers/item";
import People from "../containers/people";
import Search from "../containers/search/";
import Collection from "../containers/collection";
import Settings from "../containers/settings";
import NoDataFound from "../components/shared/NoDataFound";

const MyRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/people/:id/:name" component={People} />
    <Route exact path="/:id/:name" component={Item} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/collection" component={Collection} />
    <Route exact path="/settings" component={Settings} />
    <Route
      path="*"
      render={() => (
        <NoDataFound spaceTop alignCenter message="You've landed nowhere!" />
      )}
    />
  </Switch>
);

export default MyRouter;
