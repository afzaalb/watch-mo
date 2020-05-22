import React from "react";
import Navigation from "./Navigation";
import { Element } from "react-scroll";

const Layout = ({ children }) => (
  <Element name="wrapper" className="wrapper d-flex">
    <aside className="sidebar d-flex">
      <Navigation />
    </aside>
    <main className="main mx-auto">{children}</main>
  </Element>
);

export default Layout;
