import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Router from "../routes";
import CommonStyles from "../assets/css/app.css";
import { TMDB } from "../../utils.js";

const App = ({ location })=> {
	TMDB();
	return(
	    <Layout>
	        <Router location={location} />
	    </Layout>
	);
}

export default App;
