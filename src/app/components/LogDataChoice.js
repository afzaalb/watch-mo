import React from "react";
import NavLink from "react-router-dom/NavLink";
import { Home,Search } from 'react-bytesize-icons';

const LogDataChoice = () => (
    <ul className="nav ml-auto text-center">
        <li>
            <NavLink exact to="/" title="Home">
                <Home className="align-middle" width="24"
                height="24" strokeWidth="1" />
                <span className="d-block link-title">Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/search" title="Find Here">
                <Search className="align-middle" width="24"
                height="24" strokeWidth="1" />
                <span className="d-block link-title">Find</span>
            </NavLink>
        </li>
    </ul>
);

export default LogDataChoice;
