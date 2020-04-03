import React from "react";
import isEmpty from "lodash/isEmpty";
import Loader from "../../components/shared/Loader";
import NoDataFound from "../../components/shared/NoDataFound";
import ItemsList from "../../components/home/ItemsList";

const HomeSection = ({ name, content, tmdbMsg, route }) =>
  !isEmpty(content) ? (
    <ItemsList items={content} name={name} route={route} />
  ) : tmdbMsg ? (
    <NoDataFound alignCenter spaceTop message={tmdbMsg} />
  ) : (
    <Loader spaceTop />
  );

export default HomeSection;
