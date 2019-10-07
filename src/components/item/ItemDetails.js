import React from "react";
import CastWithCrew from "./CastWithCrew";

const ItemDetails = ({
  title,
  status,
  link,
  budget,
  revenue,
  imdb,
  backdrops,
  cast,
  crew,
  productionCompanies
}) => (
  <>
    <CastWithCrew cast={cast} crew={crew} />
  </>
);

export default ItemDetails;
