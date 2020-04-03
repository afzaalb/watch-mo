import React from "react";
import NavLink from "react-router-dom/NavLink";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import { movieCategories } from "../../../constants";

const Navigation = () => (
  <nav className="navigation">
    <ul className="d-flex flex-column">
      <li className="logo">
        <NavLink to="/" title="WatchMo.com">
          WatchMo
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" title="Find Here">
          Finder
        </NavLink>
      </li>
      <li>
        <span>Movies</span>
        <ul className="droplist my-2 d-flex flex-wrap align-items-center">
          {map(movieCategories, (c, i) => (
            <li key={i} className="mr-1">
              <NavLink className="p-1" to={`/movie/${kebabCase(c)}`}>
                {c}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <NavLink to="/tv-shows" title="Find Here">
          TV Shows
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" title="Find Here">
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
