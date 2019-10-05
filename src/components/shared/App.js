import React from "react";
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
import { store } from "../../redux/store";
import "../../assets/css/app.css";

const App = () => {
  TMDB(API_KEY, API_URL, IMAGE_URL, REQ_TIMEOUT);
  setAppTheme(themes.DARK);

  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
};

export default App;
