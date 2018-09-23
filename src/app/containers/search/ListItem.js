import React from "react";
import { Link } from "react-router-dom";
import { ImageURL } from "../../../constants";
import className from "classnames";
import Rating from "../../components/Rating";

const ListItem = ({person,id,name,image,release,rating}) => {
    let people = '';
    if(person){
        people = 'people/';
    }
    return(
        <li className="col-sm-6 mb-3 d-flex">
        <Link
          to={people + id + `/${_.kebabCase(name)}`}
          className={className("mr-3", { "no-bg": image == null })}
        >
          {image != null && (
            <img
              src={`${ImageURL + "/w300" + image}`}
              className="w-100 rounded"
              alt={name}
            />
          )}
        </Link>
        <div className="search-meta mr-3 w-100">
          {release &&
              <p className="genre m-0">{release.substr(0, 4)}</p>
          }
          <Link to={people + id + `/${_.kebabCase(name)}`} className="name mb-1">
            {_.deburr(name)}
          </Link>
          {rating && rating > 0 ?
            <div className="mb-3">
                <Rating rated={rating} />
            </div> : null
          }
        </div>
        </li>
    );
}

export default ListItem;
