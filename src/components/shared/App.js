import React, { Component } from "react";
import Layout from "../layout";
import Router from "../../routes";
import { TMDB, setAppTheme } from "../../utils";
import {
  API_KEY,
  API_URL,
  IMAGE_URL,
  REQ_TIMEOUT,
  themes
} from "../../constants";
import "../../assets/css/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize TMDB api & set default theme
    TMDB(API_KEY, API_URL, IMAGE_URL, REQ_TIMEOUT);
    setAppTheme(themes.LITE);
  }

  render() {
    return (
      <Layout>
        <Router />
      </Layout>
    );
  }
}

export default App;
