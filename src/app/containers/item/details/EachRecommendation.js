import React from "react";
import { Link } from "react-router-dom";
import { CoverURL } from "../../../../constants";
import _ from "lodash";

const EachRecommendation = props => (
	<div className="col-sm-6">
		<Link
			title={props.name}
			className="mb-3 d-block"
			onClick={props.force}
			to={`/${props.id}` + `/` + _.kebabCase(props.name)}>
			<img
				src={`${CoverURL}` + props.poster}
				className="w-100 mb-1"
				alt={props.name}
			/>
			<div className="text-truncate">{_.deburr(props.name)}</div>
		</Link>
	</div>
);

export default EachRecommendation;
