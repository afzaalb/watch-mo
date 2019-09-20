import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => (
  <div className="wrapper d-flex flex-column flex-1-1-a">
    <Header />
    {children}
  </div>
);

export default Layout;
