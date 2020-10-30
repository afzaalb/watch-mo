import React, { Suspense, lazy } from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Loader from "../components/shared/Loader";
import NoDataFound from "../components/shared/NoDataFound";
import Home from "../containers/home";

const Movies = lazy(() => import("../containers/movies"));
const MovieItem = lazy(() => import("../containers/movie-item"));
const TvShows = lazy(() => import("../containers/tv-shows"));
const TvItem = lazy(() => import("../containers/tv-item"));
const Person = lazy(() => import("../containers/person"));
const Search = lazy(() => import("../containers/search"));
const Settings = lazy(() => import("../containers/settings"));

const renderComponent = (WrappedComponent) => (props) => (
  <WrappedComponent {...props} />
);

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
