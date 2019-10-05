import React from "react";
import Link from "react-router-dom/Link";
import kebabCase from "lodash/kebabCase";
import classNames from "classnames";
import { IMAGE_URL } from "../../constants";
import Avatar from "../../assets/images/avatar.png";

const TopCastMember = ({ id, name, character, profile }) => (
  <li className="mb-3 mr-2">
    <Link
      to={`/people/` + id + `/${kebabCase(name)}`}
      title={name + ` as ` + character}
    >
      <img
        width="66"
        height="66"
        className={classNames("cast mini-cast rounded-circle", {
          "border-0": !profile
        })}
        src={profile ? IMAGE_URL + `/w66_and_h66_face` + profile : Avatar}
        alt={name}
      />
    </Link>
  </li>
);

export default TopCastMember;
