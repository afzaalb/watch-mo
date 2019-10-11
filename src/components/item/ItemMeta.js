import React from "react";
import uniqBy from "lodash/uniqBy";
import ReactImageFallback from "react-image-fallback";
import { Calendar, Tag, Clock } from "react-bytesize-icons";
import Rating from "../../components/shared/Rating";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import { handleRunTime } from "../../utils";

const ItemMeta = ({
  overview,
  rating,
  title,
  release,
  genres,
  runtime,
  poster
}) => (
  <section className="item-meta d-flex">
    <div className="poster-shot">
      <ReactImageFallback
        src={`${IMAGE_URL + "/w342" + poster}`}
        fallbackImage={FALLBACK_IMAGE}
        alt={title}
        className="cover-fit w-100 h-100"
      />
    </div>
    <div className="meta">
      <h2 className="bold">
        {title}
        <small> ({release.slice(0, 4)})</small>
      </h2>
      <ul className="d-flex flex-wrap">
        {rating && rating > 0 ? (
          <li className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center">
            <Rating rated={rating} />
          </li>
        ) : null}
        {runtime > 0 && (
          <li className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center">
            <Clock
              className="align-top mr-2"
              width="14"
              height="14"
              strokeWidth="2"
            />
            <span>{handleRunTime(runtime)}</span>
          </li>
        )}
        {genres.length > 0 && (
          <li className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center">
            <Tag
              className="align-top mr-2"
              width="14"
              height="14"
              strokeWidth="2"
            />
            <span className="genre-list">
              {uniqBy(genres, "id").map(g => {
                return <span key={g.id}>{g.name}</span>;
              })}
            </span>
          </li>
        )}
        <li className="pill px-3 py-1 mr-2 mb-2 d-flex align-items-center">
          <Calendar
            className="align-top mr-2"
            width="14"
            height="14"
            strokeWidth="2"
          />
          <span>{release}</span>
        </li>
      </ul>
      <p className="summary">{overview}</p>
    </div>
  </section>
);

export default ItemMeta;
