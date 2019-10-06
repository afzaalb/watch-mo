import React from "react";
import { ChevronRight } from "react-bytesize-icons";
import classNames from "classnames";
import map from "lodash/map";
import FullCastMember from "./FullCastMember";

const FullCast = ({ cast }) => (
  <div className="col-sm-12 col-md-12">
    <section className={classNames("pt-4 full-cast")}>
      <h4 className="mb-4">
        <ChevronRight
          className="align-middle"
          width="16"
          height="16"
          strokeWidth="2"
        />
        Full Cast ({cast.length})
      </h4>
      <ul className="row">
        {map(cast, k => (
          <FullCastMember
            key={k.cast_id}
            id={k.id}
            name={k.name}
            character={k.character}
            profile={k.profile_path}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default FullCast;
