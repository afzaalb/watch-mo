import React from "react";
import map from "lodash/map";
import classNames from "classnames";
import { filterTypes } from "../../constants";

const Filters = ({ selectedFilters, setFilterHandler }) => (
  <div className="d-flex filter-list mt-2 mb-5">
    {map(filterTypes, (f, i) => (
      <button
        type="button"
        className={classNames("btn btn-sm mr-2", {
          "btn-success": selectedFilters.includes(f),
          "btn-light": !selectedFilters.includes(f),
        })}
        key={i}
        onClick={() => setFilterHandler(f)}
      >
        {f}
      </button>
    ))}
  </div>
);

export default Filters;
