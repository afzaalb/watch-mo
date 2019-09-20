import React from "react";
import Layout from "./Layout";
import Router from "../routes";
import "../assets/css/app.css";
import { TMDB } from "../../utils";
import { API_KEY, API_URL, IMAGE_URL, REQ_TIMEOUT } from "../../constants";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const App = ({ location }) => {
  TMDB(API_KEY, API_URL, IMAGE_URL, REQ_TIMEOUT);

  return (
    <Provider store={store}>
      <Layout>
        <Router location={location} />
      </Layout>
    </Provider>
  );
};

export default App;
