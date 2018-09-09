import React from "react";
import { Link } from "react-router-dom";
import { CoverURL } from "../../../constants";
import classNames from "classnames";
import Rating from "../../components/Rating";

const Slot = ({ id, name, cover, rating, overview, release }) => (
	<li className="col-sm-4 col-md-4 movies-item h-100">
		<Link
			title={overview}
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
				{release && (
					<p className="genre">{release}</p>
				)}
				<p className="name">{name}</p>
				{overview ? <p className="description text-truncate mb-0">{overview}</p> : <p className="mb-0">View More Info</p>}
			</div>
			{rating && rating > 0 ? (<Rating rated={rating} />):null}
		</Link>
	</li>
);

export default Slot;
