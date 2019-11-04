import React from "react";
import Navigation from "./navigation";
import { Element } from "react-scroll";

const Layout = ({ children }) => (
  <Element name="wrapper" className="wrapper">
    <div className="container d-flex">
      <Navigation />
      <main className="flex-1-1-a">{children}</main>
    </div>
  </Element>
);

export default Layout;
