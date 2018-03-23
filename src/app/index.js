import React from "react";
import ReactDOM from "react-dom";
import App from "./hoc/App";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    <Router basename="watchMo">
        <Route component={App} />
    </Router>,
    document.getElementById("reactive-movies-base")
);
