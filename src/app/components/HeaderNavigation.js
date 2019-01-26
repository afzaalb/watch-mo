import React from "react";
import NavLink from "react-router-dom/NavLink";
import { Search } from 'react-bytesize-icons';
import SearchField from "./SearchField";
import HeadWithTitle from "./HeadWithTitle";
import { splitURL } from "../../utils";

const HeaderNavigation = () => (
  <ul className="navigation d-flex align-items-center">
    {location.pathname.split('/').length > 2
      ? <HeadWithTitle item={splitURL} />
      : null
    }
    <SearchField />
    <li className="mx-3">
        <NavLink to="/search" title="Find Here">
            <Search className="align-middle" width="24"
            height="24" strokeWidth="1" />
            <span className="d-block link-title">Find</span>
        </NavLink>
    </li>
  </ul>
);

export default HeaderNavigation;
