import React, { useState } from "react";
import NavLink from "react-router-dom/NavLink";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import { movieCategories, tvCategories } from "../../constants";
import Search from "react-bytesize-icons/Search";
import Video from "react-bytesize-icons/Video";
import Portfolio from "react-bytesize-icons/Portfolio";
import Camera from "react-bytesize-icons/Camera";
import AttributionModal from "./AttributionModal";
import { Spring } from "react-spring/renderprops";
import { logoSpring } from "../../constants/spring-configs";

const Navigation = () => {
  const [isAttributionShown, setAttribution] = useState(false);

  const toggleAttribution = () => {
    setAttribution(!isAttributionShown);
  };

  return (
    <nav className="navigation ml-auto position-relative">
      <ul className="d-flex">
        <Spring from={logoSpring.from} to={logoSpring.to}>
          {(animatedSpring) => (
            <li
              className="logo d-flex align-items-center"
              style={animatedSpring}
            >
              <NavLink to="/" title="Browse">
                <span>WatchMo</span>
              </NavLink>
            </li>
          )}
        </Spring>
        <li>
          <NavLink
            to="/search"
            title="Find Here"
            className="d-flex align-items-center"
          >
            <Search strokeWidth="3" width="18" className="align-middle mr-2" />
            <span>Finder</span>
          </NavLink>
        </li>
        <li>
          <span className="d-flex align-items-center">
            <Camera strokeWidth="3" width="18" className="align-middle mr-2" />
            <span>Movies</span>
          </span>
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
          <span className="d-flex align-items-center">
            <Video strokeWidth="3" width="18" className="align-middle mr-2" />
            <span>TV Shows</span>
          </span>
          <ul className="droplist my-2 d-flex flex-wrap align-items-center">
            {map(tvCategories, (c, i) => (
              <li key={i} className="mr-1">
                <NavLink className="p-1" to={`/tv/${kebabCase(c)}`}>
                  {c}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li
          onClick={toggleAttribution}
          className="c-hand d-flex align-items-center"
        >
          <Portfolio strokeWidth="3" width="18" className="align-middle mr-2" />
          <span>Attribution</span>
        </li>
      </ul>
      <AttributionModal
        isAttributionShown={isAttributionShown}
        toggleAttribution={toggleAttribution}
      />
    </nav>
  );
};

export default Navigation;
