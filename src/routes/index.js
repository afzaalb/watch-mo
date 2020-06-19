import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Home from "../containers/home";
import Movies from "../containers/movies";
import MovieItem from "../containers/movie-item";
import TvItem from "../containers/tv-item";
import Person from "../containers/person";
import Search from "../containers/search/";
import Settings from "../containers/settings";
import NoDataFound from "../components/shared/NoDataFound";

const MyRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    {/* Movie Routes */}
    <Route exact path="/movie/:category" component={Movies} />
    <Route exact path="/movie/:id/:name" component={MovieItem} />

    {/* Person Routes */}
    <Route exact path="/person/:id/:name" component={Person} />

    {/* TV Routes */}
    <Route exact path="/tv/:id/:name" component={TvItem} />

    {/* Other Features */}
    <Route exact path="/search" component={Search} />
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
