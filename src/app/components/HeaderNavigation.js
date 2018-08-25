import React from "react";
import { Route } from "react-router-dom";
import LogDataChoice from "./LogDataChoice";
import HeadWithTitle from "./HeadWithTitle";

const HeaderNavigation = ({ item }) => (
  <nav className="navigation d-flex align-items-center">
    <LogDataChoice />
  </nav>
);

export default HeaderNavigation;
