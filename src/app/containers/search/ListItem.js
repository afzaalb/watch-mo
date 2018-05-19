import React from "react";
import { Link } from "react-router-dom";
import { ImageURL } from "../../../constants";
import className from "classnames";

const ListItem = props => (
  <li className="col-sm-6 mb-3 d-flex">
    <Link
      to={props.id + `/${_.kebabCase(props.name)}`}
      className={className("mr-3", { "no-bg": props.image == null })}
    >
      {props.image != null && (
        <img
          src={`${ImageURL + "/w300" + props.image}`}
          className="w-100 rounded"
          alt={props.name}
        />
      )}
    </Link>
    <div className="search-meta mr-3 w-100">
      <p className="genre m-0">{props.release.substr(0, 4)}</p>
      <Link to={props.id + `/${_.kebabCase(props.name)}`} className="name mb-1">
        {_.deburr(props.name)}
      </Link>
      <Link
        to={props.id + `/${_.kebabCase(props.name)}`}
        className="text-truncate d-block"
      >
        View More Info
      </Link>
    </div>
  </li>
);

export default ListItem;
