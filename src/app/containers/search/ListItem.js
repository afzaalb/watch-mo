import React from "react";
import { Link } from "react-router-dom";
import { ImageURL } from "../../../constants";
import className from "classnames";
import slug from "slug";

slug.defaults.mode = "rfc3986";

const ListItem = props => (
	<li className="col-sm-4 mb-3">
		<Link
			to={props.id + `/${slug(props.name)}`}
			className={className("d-block", { "no-bg": props.image == null })}>
			{props.image != null && (
				<img
					src={`${ImageURL + "/w300" + props.image}`}
					className="h-100 w-100 cover-fit mx-auto"
					alt={props.name}
				/>
			)}
		</Link>
		<div className="search-meta p-2 w-100">
			<div className="genre d-none">Genre</div>
			<p className="name mb-1 text-truncate">{_.deburr(props.name)}</p>
			<p className="description d-none">
				Lorem Ipsum dolor sit amet comes here
			</p>
			<Link
				to={props.id + `/${slug(props.name)}`}
				className="text-truncate d-block">
				View More Info
			</Link>
		</div>
	</li>
);

export default ListItem;
