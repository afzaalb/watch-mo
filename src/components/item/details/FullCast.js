import React from "react";
import { ChevronRight } from 'react-bytesize-icons';
import classNames from "classnames";

const FullCast = ({toggle,showAll,count,casts}) => (
	<div className="col-sm-12 col-md-12">
		<section
			className={classNames("pt-4 full-cast", { showing: toggle })}>
			<h4 className="mb-4" onClick={showAll}>
				<ChevronRight className="align-middle" width="16"
				height="16" strokeWidth="2" /> Full Cast ({count})
			</h4>
			<ul className="row">{casts}</ul>
		</section>
	</div>
);

export default FullCast;
