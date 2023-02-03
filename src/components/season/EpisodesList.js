import React from "react";
import { Calendar } from "react-bytesize-icons";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import { COVER_URL, FALLBACK_IMAGE } from "../../constants";

const EpisodesList = ({ showName, tvId, seasonNumber, episodes }) =>
  episodes && episodes.length > 0 ? (
    <article>
      <h6>Episodes</h6>
      <div className="row">
        {episodes.map((episode, i) => {
          const { name, overview, episode_number, still_path, air_date } =
            episode;
          return (
            <Link
              key={i}
              to={`/tv/${tvId}/${showName}/seasons/${seasonNumber}/episodes/${episode_number}`}
              className="col-sm-12 col-xs-12"
            >
              <div className="d-flex rounded-card">
                <div className="py-2 px-2">
                  <Img
                    src={`${COVER_URL + still_path}`}
                    error={FALLBACK_IMAGE}
                    className="rounded"
                    width={144}
                    alt={name}
                  />
                </div>
                <div className="flex-1-1-a py-2 px-3">
                  <h6 className="d-flex align-items-center">
                    <span className="mr-2">{name}</span>
                    <span className="flex-shrink-0 pill px-3 py-1 mr-2 d-flex align-items-center">
                      <Calendar
                        className="align-top mr-2"
                        width="14"
                        height="14"
                        strokeWidth="2"
                      />
                      <span>Aired {air_date}</span>
                    </span>
                    <small className="flex-shrink-0 ml-auto text-muted">
                      Episode {episode_number}
                    </small>
                  </h6>
                  <p className="m-0">{overview}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  ) : (
    ""
  );

export default EpisodesList;
