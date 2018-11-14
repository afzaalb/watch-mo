import React from "react";
import Link from "react-router-dom/Link";
import { CoverURL } from "../../../../constants";
import Rating from "../../../components/Rating";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";

const EachRecommendation = ({name,id,poster,rating,force}) => (
	<div className="col-sm-6">
		<Link
			title={name}
			className="mb-3 d-block"
			onClick={force}
			to={`/${id}/${kebabCase(name)}`}>
			<img
				src={`${CoverURL}` + poster}
				className="w-100 mb-1"
				alt={name}
			/>
			<div className="text-truncate">{deburr(name)}</div>
			<Rating rated={rating} />
		</Link>
	</div>
);

export default EachRecommendation;
