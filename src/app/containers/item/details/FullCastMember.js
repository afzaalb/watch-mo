import React from "react";
import Link from "react-router-dom/Link";
import classNames from "classnames";
import Avatar from "../../../assets/images/avatar.png";
import { ImageURL } from "../../../../constants";
import kebabCase from "lodash/kebabCase";

const FullCastMember = ({id,name,profile,character}) => (
    <li
        className="col-md-4 col-sm-6 media mb-4">
        <Link to={`/people/` + id + `/${kebabCase(name)}`}>
            <img
                width="66"
                height="66"
                className={classNames(
                    "cast mini-cast rounded-circle mb-3 mr-2",
                    { "border-0": !profile }
                )}
                src={
                    profile
                        ? ImageURL +
                          `/w66_and_h66_face` +
                          profile
                        : Avatar
                }
                alt={name}
                title={name + ` as ` + character}
            />
        </Link>
        <div className="media-body">
            <p className="mt-0 mb-1 bold">
                <Link
                    to={`/people/` + id + `/${kebabCase(name)}`}>
                    {name}
                </Link>
            </p>
            <p className="my-0">{character}</p>
        </div>
    </li>
);

export default FullCastMember;
