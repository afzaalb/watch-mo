import React from "react";
import { Route } from "react-router-dom";
import LogDataChoice from "./LogDataChoice";
import HeadWithTitle from "./HeadWithTitle";
import { splitURL } from "../../utils";

const HeaderNavigation = () => (
  <nav className="navigation d-flex align-items-center">
    {location.pathname.split('/').length > 2 ?
        <HeadWithTitle item={splitURL} /> : null
    }
    <LogDataChoice />
  </nav>
);

export default HeaderNavigation;
