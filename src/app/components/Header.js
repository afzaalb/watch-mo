import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import classNames from "classnames";

const Header = () => (
    <header className="px-3 w-100">
        <div className="container-fluid navbar justify-content-start align-items-center">
            <div className="logo">
                <Link to="/" className="p-3" title="WatchMo.com">
                    WatchMo
                </Link>
            </div>
            <HeaderNavigation />
            <div className="hamburger d-sm-none d-md-none">
                <span />
                <span />
                <span />
            </div>
        </div>
    </header>
);

export default Header;
