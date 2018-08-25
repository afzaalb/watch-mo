import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon,SearchIcon } from "../../constants";

const LogDataChoice = () => (
    <ul className="nav ml-auto text-center">
        <li>
            <NavLink exact to="/" title="Home" className="py-2">
                {HomeIcon}
                <span className="d-block link-title">Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/search" title="Find Here" className="py-2">
                {SearchIcon}
                <span className="d-block link-title">Find</span>
            </NavLink>
        </li>
    </ul>
);

export default LogDataChoice;
