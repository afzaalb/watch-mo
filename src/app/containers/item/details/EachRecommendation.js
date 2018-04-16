import React from "react";
import { Link } from "react-router-dom";
import { CoverURL } from "../../../../constants";
import slug from "slug";
import _ from "lodash";

slug.defaults.mode = "rfc3986";

const EachRecommendation = props => (
	<div className="col-sm-6">
		<Link
			title={props.name}
			className="mb-3 d-block"
			onClick={props.force}
			to={`/${props.id}` + `/` + slug(props.name)}>
			<img
				src={`${CoverURL}` + props.poster}
				className="w-100 mb-1"
				alt={props.name + props.rating}
			/>
		<div className="text-truncate">{_.deburr(props.name)}</div>
		</Link>
	</div>
);

export default EachRecommendation;
