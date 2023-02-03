import React from "react";
import ItemMeta from "./ItemMeta";
import ItemSidebar from "./ItemSidebar";
import CastMembers from "./CastMembers";
import { IMDB_TITLE } from "../../constants";
import imdbLogo from "../../assets/images/imdb.png";

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
  seasons,
  productionCompanies,
  children,
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
      backdrops={backdrops}
    />
    {children}
    {imdb && (
      <ul className="d-flex flex-wrap imdb-status py-2 align-items-center justify-content-between">
        <li className="bold">{status}</li>
        <li>
          <small className="mr-2">View on</small>
          <a target="_blank" href={IMDB_TITLE + imdb} title="View on IMDb">
            <img
              src={imdbLogo}
              className="img-fluid w-100"
              alt="View on IMDb"
            />
          </a>
        </li>
      </ul>
    )}

    <section className="row item-details">
      <div className="col-md-8 pr-4 mt-4">
        {cast && <CastMembers cast={cast} />}
      </div>
      <ItemSidebar
        title={title}
        link={link}
        budget={budget}
        revenue={revenue}
        crew={crew}
        imdb={imdb}
        seasons={seasons}
        productionCompanies={productionCompanies}
      />
    </section>
  </>
);

export default ItemDetails;
