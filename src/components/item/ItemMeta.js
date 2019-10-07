import React from "react";
import uniqBy from "lodash/uniqBy";
import { Calendar, Tag, Clock, Link } from "react-bytesize-icons";
import Rating from "../../components/shared/Rating";
import { IMDB_TITLE } from "../../constants";
import { handleRunTime } from "../../utils";

const ItemMeta = ({
  overview,
  rating,
  title,
  release,
  genres,
  runtime,
  imdb
}) => (
  <>
    <h2 className="bold mb-3">{title}</h2>
    <p title={`${title} released on ${release}.`}>
      <Calendar
        className="align-top mr-2"
        width="18"
        height="18"
        strokeWidth="2"
      />
      <span>{release}</span>
    </p>
    {genres.length > 0 && (
      <p>
        <Tag
          className="align-top mr-2"
          width="18"
          height="18"
          strokeWidth="2"
        />
        <span className="genre-list">
          {uniqBy(genres, "id").map(g => {
            return <span key={g.id}>{g.name}</span>;
          })}
        </span>
      </p>
    )}
    {runtime > 0 && (
      <p title={`Total Playing Time ${handleRunTime(runtime)}.`}>
        <Clock
          className="align-top mr-2"
          width="18"
          height="18"
          strokeWidth="2"
        />
        <span>Runtime {handleRunTime(runtime)}</span>
      </p>
    )}
    <a
      target="_blank"
      href={IMDB_TITLE + `${imdb}`}
      title={`View ${title} on IMDB.`}
    >
      <Link className="align-top mr-2" width="18" height="18" strokeWidth="2" />
      <span>View on IMDB</span>
    </a>

    {rating && rating > 0 ? <Rating rated={rating} heading /> : null}
    <p className="summary">{overview}</p>
  </>
);

export default ItemMeta;
