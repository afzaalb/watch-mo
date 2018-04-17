import React from "react";
import LogDataChoice from "./LogDataChoice";
import HeadWithTitle from "./HeadWithTitle";

const HeaderNavigation = () => (
  <nav className="navigation d-flex align-items-center">
    <HeadWithTitle />
    <LogDataChoice />
  </nav>
);

export default HeaderNavigation;
