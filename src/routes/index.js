import React, { Suspense } from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Loader from "../components/shared/Loader";
import Home from "../containers/home";
import Movies from "../containers/movies";
import MovieItem from "../containers/movie-item";
import TvShows from "../containers/tv-shows";
import TvItem from "../containers/tv-item";
import SeasonItem from "../containers/season-item";
import Person from "../containers/person";
import Search from "../containers/search";
import Settings from "../containers/settings";
import NoDataFound from "../components/shared/NoDataFound";

const renderComponent = (WrappedComponent) => (props) =>
  <WrappedComponent {...props} />;

const MyRouter = () => (
  <Suspense fallback={<Loader spaceTop />}>
    <Switch>
      <Route exact path="/" render={renderComponent(Home)} />

      {/* Movie Routes */}
      <Route exact path="/movie/:category" render={renderComponent(Movies)} />
      <Route
        exact
        path="/movie/:id/:name"
        render={renderComponent(MovieItem)}
      />

      {/* Person Routes */}
      <Route exact path="/person/:id/:name" render={renderComponent(Person)} />

      {/* TV Routes */}
      <Route exact path="/tv/:category" render={renderComponent(TvShows)} />
      <Route exact path="/tv/:id/:name" render={renderComponent(TvItem)} />
      <Route
        exact
        path="/tv/:id/:name/seasons/:number"
        render={renderComponent(SeasonItem)}
      />

      {/* Other Features */}
      <Route exact path="/search" render={renderComponent(Search)} />
      <Route exact path="/settings" render={renderComponent(Settings)} />

      <Route
        path="*"
        render={() => (
          <NoDataFound spaceTop alignCenter message="You've landed nowhere!" />
        )}
      />
    </Switch>
  </Suspense>
);

export default MyRouter;
