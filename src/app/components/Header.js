import React from "react";
import Link from "react-router-dom/Link";
import { Home, Search } from "react-bytesize-icons";
import NavLink from "react-router-dom/NavLink";
import HeadWithTitle from "./HeadWithTitle";
import { splitURL } from "../../utils";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideHeader: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    console.log("scrolling");
  };

  render() {
    return (
      <header className="w-100">
        <div className="navbar p-0 justify-content-start align-items-center">
          <div className="logo">
            <Link
              to="/"
              className="d-flex align-items-center text-lowercase bold py-3 pl-3"
              title="WatchMo.com"
            >
              <Home
                className="align-middle"
                width="24"
                height="24"
                strokeWidth="2"
              />
              <span className="px-2">WatchMo</span>
            </Link>
          </div>
          <ul className="navigation d-flex align-items-center">
            {location.pathname.split("/").length > 2 ? (
              <HeadWithTitle title={splitURL()} />
            ) : null}
            <li className="ml-auto mr-3">
              <NavLink to="/search" title="Find Here">
                <Search
                  className="align-middle"
                  width="24"
                  height="24"
                  strokeWidth="1"
                />
                <span className="d-block link-title">Find</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
