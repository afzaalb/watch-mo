import React, { Component } from "react";
import { Provider } from "react-redux";
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
import initializeStore from "../../redux/store";
import "../../assets/css/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize TMDB api & set default theme
    TMDB(API_KEY, API_URL, IMAGE_URL, REQ_TIMEOUT);
    setAppTheme(themes.LITE);
  }

  render() {
    const store = initializeStore();

    return (
      <Provider store={store}>
        <Layout>
          <Router />
        </Layout>
      </Provider>
    );
  }
}

export default App;
