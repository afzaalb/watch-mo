import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Avatar from "../../../assets/images/avatar.png";
import { ImageURL } from "../../../../constants";

const FullCastMember = props => (
    <li
        className="col-md-4 col-sm-6 media mb-4">
        <Link to={`/people/` + props.id + `/${_.kebabCase(props.name)}`}>
            <img
                width="66"
                height="66"
                className={classNames(
                    "cast mini-cast rounded-circle mb-3 mr-2",
                    { "border-0": !props.profile }
                )}
                src={
                    props.profile
                        ? ImageURL +
                          `/w66_and_h66_face` +
                          props.profile
                        : Avatar
                }
                alt={props.name}
                title={props.name + ` as ` + props.character}
            />
        </Link>
        <div className="media-body">
            <p className="mt-0 mb-1 bold">
                <Link
                    to={`/people/` + props.id + `/${_.kebabCase(props.name)}`}>
                    {props.name}
                </Link>
            </p>
            <p className="my-0">{props.character}</p>
        </div>
    </li>
);

export default FullCastMember;
