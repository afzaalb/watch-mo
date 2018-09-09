import React from "react";
import { Link } from "react-router-dom";
import { CoverURL } from "../../../../constants";
import Rating from "../../../components/Rating";
import _ from "lodash";

const EachRecommendation = ({name,id,poster,rating,force}) => (
	<div className="col-sm-6">
		<Link
			title={name}
			className="mb-3 d-block"
			onClick={force}
			to={`/${id}` + `/` + _.kebabCase(name)}>
			<img
				src={`${CoverURL}` + poster}
				className="w-100 mb-1"
				alt={name}
			/>
			<div className="text-truncate">{_.deburr(name)}</div>
			<Rating rated={rating} />
		</Link>
	</div>
);

export default EachRecommendation;
