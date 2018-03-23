import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Router from "../routes";
import CommonStyles from "../assets/css/app.css";

const App = location => (
    <Layout>
        <Router location={location} />
    </Layout>
);

export default App;
