import React from "react";
import pluralize from "pluralize";
import { Link } from "react-router-dom";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import Torrent from "../shared/Torrent";
import { getCrewMembersByType } from "../../utils";
import { crewTypes } from "../../constants";

const ItemSidebar = ({
  title,
  link,
  budget,
  revenue,
  crew,
  imdb,
  seasons,
  productionCompanies,
}) => (
  <div className="col-md-4 item-detail-meta pl-4 mt-4">
    {!seasons && <Torrent movie={imdb} />}
    {link !== null && (
      <>
        <h6 className="mb-1">Homepage</h6>
        <p className="mb-3">
          <a href={link}>{title}</a>
        </p>
      </>
    )}

    {budget > 0 && (
      <>
        <h6 className="mb-1">Budget</h6>
        <p className="mb-3">$ {budget.toLocaleString()}</p>
      </>
    )}

    {revenue > 0 && (
      <>
        <h6 className="mb-1">Revenue</h6>
        <p className="mb-3">$ {revenue.toLocaleString()}</p>
      </>
    )}

    {getCrewMembersByType(crew, crewTypes.WRITER).length > 0 && (
      <>
        <h6 className="mb-1">
          {pluralize(
            crewTypes.WRITER,
            getCrewMembersByType(crew, crewTypes.WRITER).length
          )}
        </h6>
        <ul className="mb-3">
          {map(getCrewMembersByType(crew, crewTypes.WRITER), ({ name, id }) => (
            <li key={id}>
              <Link to={`/person/${id}/${kebabCase(name)}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </>
    )}

    {getCrewMembersByType(crew, crewTypes.DIRECTOR).length > 0 && (
      <>
        <h6 className="mb-1">
          {pluralize(
            crewTypes.DIRECTOR,
            getCrewMembersByType(crew, crewTypes.DIRECTOR).length
          )}
        </h6>
        <ul className="mb-3">
          {map(
            getCrewMembersByType(crew, crewTypes.DIRECTOR),
            ({ name, id }) => (
              <li key={id}>
                <Link to={`/person/${id}/${kebabCase(name)}`}>{name}</Link>
              </li>
            )
          )}
        </ul>
      </>
    )}

    {getCrewMembersByType(crew, crewTypes.PRODUCER).length > 0 && (
      <>
        <h6 className="mb-1">
          {pluralize(
            crewTypes.PRODUCER,
            getCrewMembersByType(crew, crewTypes.PRODUCER).length
          )}
        </h6>
        <ul className="mb-3">
          {map(
            getCrewMembersByType(crew, crewTypes.PRODUCER),
            ({ name, id }) => (
              <li key={id}>
                <Link to={`/person/${id}/${kebabCase(name)}`}>{name}</Link>
              </li>
            )
          )}
        </ul>
      </>
    )}

    {productionCompanies && productionCompanies.length > 0 && (
      <>
        <h6 className="mb-1">
          {pluralize("Production Company", productionCompanies.length)}
        </h6>
        <ul className="mb-3">
          {map(productionCompanies, ({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default ItemSidebar;
