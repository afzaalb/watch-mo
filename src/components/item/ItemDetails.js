import React from "react";
import ItemMeta from "./ItemMeta";
import CastWithCrew from "./CastWithCrew";

const ItemDetails = ({
  title,
  overview,
  release,
  status,
  rating,
  genres,
  runtime,
  link,
  budget,
  revenue,
  imdb,
  poster,
  cast,
  crew,
  backdrops,
  productionCompanies
}) => (
  <>
    <ItemMeta
      title={title}
      release={release}
      genres={genres}
      runtime={runtime}
      imdb={imdb}
      overview={overview}
      rating={rating}
      poster={poster}
    />
    {status}
    <br />
    {link}
    <br />
    {budget}
    <br />
    {revenue}
    <br />
    <CastWithCrew cast={cast} crew={crew} />
  </>
);

export default ItemDetails;
