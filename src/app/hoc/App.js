import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Router from "../routes";
import "../assets/css/app.css";
import { TMDB } from "../../utils";
import { apiKey,apiURL,ImageURL,reqTime } from "../../constants";

const App = ({ location }) => {
    TMDB(
        apiKey,
        apiURL,
        ImageURL,
        reqTime
    );

    return(
        <Layout>
          <Router location={location} />
        </Layout>
    );
}

export default App;
