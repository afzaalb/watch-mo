import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import App from "./components/shared/App";
import { Provider } from "react-redux";
import initializeStore from "./redux/store";

ReactDOM.render(
  <Router>
    <Provider store={initializeStore()}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("reactive-movies-base")
);
