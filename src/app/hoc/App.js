import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Router from "../routes";
import "../assets/css/bootstrapcdn.css";
import "../assets/css/app.css";
import { TMDB } from "../../utils.js";

const App = ({ location }) => (
    <Layout>
      <Router location={location} />
    </Layout>
);

export default App;
