import React from "react";
import Link from "react-router-dom/Link";
import { IMAGE_URL } from "../../../constants";
import className from "classnames";
import Rating from "../../components/Rating";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";

const ListItem = ({person,id,name,image,release,rating}) => {
    let people = '';
    if(person){
        people = 'people/';
    }
    return(
        <li className="col-sm-6 col-md-4 mb-3">
            <span className="card-ui d-flex" title={name}>
                <Link
                  to={`${people}${id}/${kebabCase(name)}`}
                  className={className({ "no-bg": image == null })}
                >
                  {image != null && (
                    <img
                      src={`${IMAGE_URL + "/w300" + image}`}
                      className="w-100"
                      alt={name}
                    />
                  )}
                </Link>
                <span className="search-meta bg-white py-2 px-3">
                    {release &&
                      <span className="d-flex justify-content-between align-items-center mb-2">
                      {release &&
                          <span className="genre m-0">{release.substr(0, 4)}</span>
                      }
                      {rating && rating > 0 ?
                        <Rating rated={rating} /> : null
                      }
                      </span>
                    }
                  <Link to={`${people}${id}/${kebabCase(name)}`} className="name d-block bold">
                    {deburr(name)}
                  </Link>
                </span>
            </span>
        </li>
    );
}

export default ListItem;
