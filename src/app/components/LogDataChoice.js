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
        <li>
            <NavLink to="/collection" title="See Collection" className="px-2">
                {FolderIcon}
            </NavLink>
        </li>
        <li>
            <NavLink to="/profile" title="View Profile" className="px-2">
                {UserIcon}
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                title="Access your account by logging in."
                className="px-2"
            >
                Login
            </NavLink>
        </li>
    </ul>
);

export default LogDataChoice;
