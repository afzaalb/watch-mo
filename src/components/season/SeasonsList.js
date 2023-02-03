import React from "react";
import { Calendar } from "react-bytesize-icons";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import { COVER_URL, FALLBACK_IMAGE } from "../../constants";

const SeasonsList = ({ showName, tvId, seasons }) =>
  seasons && seasons.length > 0 ? (
    <article>
      <h6>Seasons ({seasons.filter((s) => s.season_number !== 0).length})</h6>
      <div className="row">
        {seasons
          .map((season, i) => {
            const { name, overview, season_number, poster_path, air_date, id } =
              season;
            return (
              <Link
                key={i}
                to={`/tv/${tvId}/${showName}/seasons/${season_number}`}
                className="col-sm-12 col-xs-12"
              >
                <div className="d-flex rounded-card">
                  <div className="py-2 px-2">
                    <Img
                      src={`${COVER_URL + poster_path}`}
                      error={FALLBACK_IMAGE}
                      className="rounded"
                      width={144}
                      alt={name}
                    />
                  </div>
                  <div className="flex-1-1-a py-2 px-3">
                    <h6 className="d-flex align-items-center">
                      <span className="mr-2">{name}</span>
                      <span className="pill px-3 py-1 mr-2 d-flex align-items-center">
                        <Calendar
                          className="align-top mr-2"
                          width="14"
                          height="14"
                          strokeWidth="2"
                        />
                        <span>Aired {air_date}</span>
                      </span>
                    </h6>
                    <p>{overview}</p>
                  </div>
                </div>
              </Link>
            );
          })
          .reverse()}
      </div>
    </article>
  ) : (
    ""
  );

export default SeasonsList;
