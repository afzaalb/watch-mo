import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import classNames from "classnames";

class Header extends Component {
    splitURL = () => {
      const completePath = location.pathname;
      const splitted = completePath.split('/');
      const nameOnly = _.startCase(splitted[2]);
      return nameOnly.replace(/-/g,' ');
    }
    render() {
        return (
            <header className="px-3 w-100">
                <div className="container-fluid navbar justify-content-start align-items-center">
                    <div className="logo my-3">
                        <Link to="/" title="WatchMo.com">
                            WatchMo
                        </Link>
                    </div>
                    <HeaderNavigation item={this.splitURL} />
                    <div className="hamburger d-sm-none d-md-none">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
