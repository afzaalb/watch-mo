import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag, Clock, ILink, IMDB } from "../../../constants";
import TopCast from "./TopCast";
import classNames from "classnames";

const handleRunTime = time => {
	const hours = parseInt(time / 60);
	const minutes = time % 60;
	return `${hours}h ${minutes}m`;
};

const ItemMeta = props => (
	<div
		className={classNames("white-card rounded w-100 d-block animated", {
			fadeOutUp: props.show,
			fadeInDown: !props.show
		})}>
		<h2 className="bold mb-3">
			{props.title}
		</h2>
		<p title={`${props.title} released on ${props.release}.`}>
			{Calendar}
			<span>{props.release}</span>
		</p>
		{props.genres.length > 0 && (
			<p>
				{Tag}
				<span className="genre-list">{props.genres}</span>
			</p>
		)}
		{props.runtime > 0 && (
			<p title={`Total Playing Time ${handleRunTime(props.runtime)}.`}>
				{Clock}
				<span>Runtime {handleRunTime(props.runtime)}</span>
			</p>
		)}
		{props.topCast.length > 0 && <TopCast top={props.topCast} />}

		<a
			target="_blank"
			href={IMDB + `${props.imdb}`}
			title={`View ${props.title} on IMDB.`}>
			{ILink}
			<span>View on IMDB</span>
		</a>
	</div>
);

export default ItemMeta;
