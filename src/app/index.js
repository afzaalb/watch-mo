import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./hoc/App";

ReactDOM.render(
    <Router basename="/watchMo">
        <Route component={App} />
    </Router>,
    document.getElementById("reactive-movies-base")
);
