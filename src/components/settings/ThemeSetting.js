import React from "react";
import Photo from "react-bytesize-icons/Photo";
import { themes } from "../../constants";
import { setAppTheme } from "../../utils";
import { capitalize, map, startCase } from "lodash";

const ThemeSetting = () => (
  <div className="content-settings neutral">
    <div className="row">
      <div className="col-12">
        <h4 className="d-flex align-items-center">
          <Photo strokeWidth="3" width="18" className="align-middle mr-2" />
          <span>Theme</span>
        </h4>
        <p className="mb-0">Change the theme to your preferred color below</p>
      </div>
      {map(themes, (theme, themeName) => {
        const themeDisplayName = startCase(capitalize(themeName));

        return (
          <div className="col-6">
            <div
              className={`${theme} p-4 c-hand theme-box`}
              onClick={() => setAppTheme(theme)}
            >
              {themeDisplayName}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ThemeSetting;
