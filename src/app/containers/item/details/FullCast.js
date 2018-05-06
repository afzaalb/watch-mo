import React from "react";
import { ChevronRight } from "../../../../constants";
import classNames from "classnames";

const FullCast = props => (
	<div className="col-sm-12 col-md-12">
		<section
			className={classNames("pt-4 full-cast", { showing: props.toggle })}>
			<h4 className="mb-4" onClick={props.showAll}>
				{ChevronRight} Full Cast ({props.count})
			</h4>
			<ul className="row">{props.casts}</ul>
		</section>
	</div>
);

export default FullCast;
