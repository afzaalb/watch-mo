import React, { Fragment } from "react";
import { Calendar, User, Lightning, Link } from "react-bytesize-icons";
import { IMDB_NAME_URL } from "../../constants";

const PersonInfo = ({
  name,
  gender,
  bio,
  bornIn,
  bornOn,
  known,
  imdb,
  home
}) => {
  return (
    <aside className="mh-100 d-flex flex-column flex-1-1-a">
      <h2 className="bold tracking-tight">{name}</h2>
      <ul className="d-flex flex-wrap">
        <li
          title="Gender"
          className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center"
        >
          <User
            className="align-top mr-2"
            width="14"
            height="14"
            strokeWidth="2"
          />
          <span>{gender == 2 ? "Male" : "Female"}</span>
        </li>
        <li
          title={`Known for ${known}`}
          className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center"
        >
          <Lightning
            className="align-top mr-2"
            width="14"
            height="14"
            strokeWidth="2"
          />
          <span>{`Known for ${known}`}</span>
        </li>
        {bornOn != null && (
          <li
            title={`Born in ${bornIn}, on ${bornOn}.`}
            className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center"
          >
            <Calendar
              className="align-top mr-2"
              width="14"
              height="14"
              strokeWidth="2"
            />
            <span>{`Born ${bornOn}`}</span>
          </li>
        )}
        {home && (
          <li
            title={`Official site`}
            className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center"
          >
            <a
              target="_blank"
              href={home}
              title={`View ${name} Official site.`}
            >
              <Link
                className="align-top mr-2"
                width="14"
                height="14"
                strokeWidth="2"
              />
              <span>Official site</span>
            </a>
          </li>
        )}
      </ul>
      {bio != null && bio != "" && <p className="mt-2">{bio}</p>}
      {imdb && (
        <ul className="mt-auto mb-0 d-flex flex-wrap imdb-status py-2 align-items-center">
          <li className="ml-auto">
            <small className="mr-2">View on</small>
            <a target="_blank" href={IMDB_NAME_URL + imdb} title="View on IMDb">
              <img
                src="../../src/assets/images/imdb.png"
                className="img-fluid w-100"
                alt="View on IMDb"
              />
            </a>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default PersonInfo;
