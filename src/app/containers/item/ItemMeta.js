import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag, Clock, ILink, IMDB } from "../../../constants";
import { handleRunTime } from "../../../utils";
import TopCast from "./TopCast";
import classNames from "classnames";

const ItemMeta = ({show,title,release,genres,runtime,topCast,imdb}) => (
	<div
		className={classNames("white-card rounded w-100 d-block animated", {
			fadeOutUp: show,
			fadeInDown: !show
		})}>
		<h2 className="bold mb-3">
			{title}
		</h2>
		<p title={`${title} released on ${release}.`}>
			{Calendar}
			<span>{release}</span>
		</p>
		{genres.length > 0 && (
			<p>
				{Tag}
				<span className="genre-list">{genres}</span>
			</p>
		)}
		{runtime > 0 && (
			<p title={`Total Playing Time ${handleRunTime(runtime)}.`}>
				{Clock}
				<span>Runtime {handleRunTime(runtime)}</span>
			</p>
		)}
		{topCast.length > 0 && <TopCast top={topCast} />}

		<a
			target="_blank"
			href={IMDB + `${imdb}`}
			title={`View ${title} on IMDB.`}>
			{ILink}
			<span>View on IMDB</span>
		</a>
	</div>
);

export default ItemMeta;
