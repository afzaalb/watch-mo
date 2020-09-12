import React from "react";
import isEmpty from "lodash/isEmpty";
import Loader from "./Loader";
import NoDataFound from "./NoDataFound";
import ItemsList from "./ItemsList";

const ListSection = ({ name, content, tmdbMsg, route, isTvList }) =>
  !isEmpty(content) ? (
    <ItemsList isTvList items={content} name={name} route={route} />
  ) : tmdbMsg ? (
    <NoDataFound alignCenter spaceTop message={tmdbMsg} />
  ) : (
    <Loader spaceTop />
  );

export default ListSection;
