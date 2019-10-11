import React from "react";
import { Link } from "react-bytesize-icons";
import ItemMeta from "./ItemMeta";
import CastWithCrew from "./CastWithCrew";
import { IMDB_TITLE } from "../../constants";

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
      overview={overview}
      rating={rating}
      poster={poster}
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <a
      target="_blank"
      href={IMDB_TITLE + `${imdb}`}
      title={`View ${title} on IMDB.`}
    >
      <Link className="align-top mr-2" width="18" height="18" strokeWidth="2" />
      <span>View on IMDB</span>
    </a>
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
