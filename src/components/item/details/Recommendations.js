import React from "react";

const Recommendations = ({list}) => (
	<div className="col-md-4">
		<section className="pt-4 recommendations">
			<h5 className="mb-4">Similar Movies</h5>
			<ul className="row">{list}</ul>
		</section>
	</div>
);

export default Recommendations;
