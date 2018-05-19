import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Avatar from "../../assets/images/avatar.png";
import { ImageURL } from "../../../constants";

const TopCastMember = props => (
    <li className="mb-3 mr-2">
        <Link
          to={`/people/` + props.id + `/${_.kebabCase(props.name)}`}
          title={props.name + ` as ` + props.character}>
            <img
                width="66"
                height="66"
                className={classNames(
                    "cast mini-cast rounded-circle",
                    {
                        "border-0": !props.profile
                    }
                )}
                src={
                    props.profile
                        ? ImageURL +
                          `/w66_and_h66_face` +
                          props.profile
                        : Avatar
                }
                alt={props.name}
            />
        </Link>
    </li>
);

export default TopCastMember;
