import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import App from "./hoc/App";

ReactDOM.render(
    <Router>
        <Route component={App} />
    </Router>,
    document.getElementById("reactive-movies-base")
);
