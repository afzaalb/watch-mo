import React from "react";
import isEmpty from "lodash/isEmpty";
import Loader from "../../components/shared/Loader";
import NoDataFound from "../../components/shared/NoDataFound";
import ItemsList from "../../components/home/ItemsList";

const HomeSection = ({ name, content, tmdbResponse, loading, route }) =>
  !isEmpty(content) ? (
    <ItemsList items={content} name={name} route={route} />
  ) : tmdbResponse ? (
    <NoDataFound alignCenter spaceTop message={tmdbResponse} />
  ) : loading ? (
    <Loader spaceTop />
  ) : null;

export default HomeSection;
