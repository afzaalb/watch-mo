import React from "react";
import { Route } from "react-router-dom";
import LogDataChoice from "./LogDataChoice";
import HeadWithTitle from "./HeadWithTitle";

const HeaderNavigation = ({ item }) => (
  <nav className="navigation d-flex align-items-center">
    {location.pathname.split('/').length > 2 ?
        <HeadWithTitle item={item} /> : null
    }
    <LogDataChoice />
  </nav>
);

export default HeaderNavigation;
