import React from "react";
import Link from "react-router-dom/Link";
import { ImageURL } from "../../../constants";
import classNames from "classnames";
import Rating from "../../components/Rating";
import kebabCase from "lodash/kebabCase";

const Slot = ({ category, currentSlide, totalSlides, id, name, cover, rating, overview, release }) => (
	<div className="movies-item">
		<div className={classNames("cover",({'no-bg' : !cover}))}>
			{cover &&
				(<img
					src={`${ImageURL}/w1280${cover}`}
					className="h-100 w-100 cover-fit mx-auto"
					alt={name}
				/>)
			}
		</div>
		<div className="bg-white card-area d-flex flex-column">
			<div className="meta-movie mb-3 d-flex justify-content-between align-items-center">
				<Link
					title={overview}
					to={`/${id}/${kebabCase(name)}`}
					className="name"
				>{name}</Link>
				<h4 className="category-meta font-italic">{category} <span className="font-italic">{currentSlide} of {totalSlides}</span></h4>
			</div>
			<div className="meta-movie">
				{overview && <p className="description">{overview}</p>}
				{release && <p className="genre mb-0">{release}</p>}
				{rating && rating > 0 ? (<Rating rated={rating} />):null}
			</div>
		</div>
	</div>
);

export default Slot;
