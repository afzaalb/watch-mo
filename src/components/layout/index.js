import React from "react";
import Navigation from "./navigation";

const Layout = ({ children }) => (
  <div className="wrapper">
    <div className="container d-flex">
      <Navigation />
      <main className="flex-1-1-a">{children}</main>
    </div>
  </div>
);

export default Layout;
