import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon, FolderIcon, UserIcon } from "../../constants";

const LogDataChoice = () => (
    <ul className="nav ml-auto">
        <li>
            <NavLink exact to="/" title="Home" className="px-2">
                {HomeIcon}
            </NavLink>
        </li>
        <li>
            <NavLink to="/search" title="Search Now" className="px-2">
                {SearchIcon}
            </NavLink>
        </li>
        
    </ul>
);

export default LogDataChoice;
