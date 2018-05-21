import React from "react";
import { Link } from "react-router-dom";
import { CoverURL } from "../../../constants";
import classNames from "classnames";

const Slot = ({ id, name, cover }) => (
	<li className="col-sm-4 col-md-4 movies-item h-100">
		<Link
			to={`/${id}/${_.kebabCase(name)}`}
			className="all-smooth">
			<div className={classNames("cover",({'no-bg' : !cover}))}>
				{cover &&
					(<img
						src={`${CoverURL}` + cover}
						className="h-100 w-100 cover-fit mx-auto"
						alt={name}
					/>)
				}
			</div>
			<div className="meta-movie w-100">
				<p className="name">{name}</p>
				<p className="description text-truncate mb-0">View More Info</p>
			</div>
		</Link>
	</li>
);

export default Slot;
