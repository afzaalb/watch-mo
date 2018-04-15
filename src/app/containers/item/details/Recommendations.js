import React from "react";

const Recommendations = props => (
	<div className="col-md-4">
		<section className="pt-4">
			<h4 className="mb-4">Similar Movies</h4>
			{props.list}
		</section>
	</div>
);

export default Recommendations;
