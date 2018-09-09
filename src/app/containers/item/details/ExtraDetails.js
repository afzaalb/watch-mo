import React from "react";
import pluralize from "pluralize";
import Torrent from "../../torrent/TorrentHome";

const ExtraDetails = ({title,status,link,budget,revenue,writer,director,producer,companies,imdb}) => (
	<div className="col-md-8">
		<section className="pt-4 item-detail-meta">
			<div className="row">
				<Torrent movie={imdb} />
				{status && (
					<div className="col-sm-6">
						<h6>Status</h6>
						<p>
							<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
								{status}
							</span>
						</p>
					</div>
				)}

				{link != null && (
					<div className="col-sm-6">
						<h6>Homepage</h6>
						<p>
							<a href={link}>
								<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
									{title}
								</span>
							</a>
						</p>
					</div>
				)}

				{budget > 0 && (
					<div className="col-sm-6">
						<h6>Budget</h6>
						<p>
							<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
								$ {budget.toLocaleString()}
							</span>
						</p>
					</div>
				)}

				{revenue > 0 && (
					<div className="col-sm-6">
						<h6>Revenue</h6>
						<p>
							<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
								$ {revenue.toLocaleString()}
							</span>
						</p>
					</div>
				)}

				{writer.length > 0 && (
					<div className="col-sm-6">
						<h6>{pluralize("Writer", writer.length)}</h6>
						<p>{writer}</p>
					</div>
				)}

				{director.length > 0 && (
					<div className="col-sm-6">
						<h6>{pluralize("Director", director.length)}</h6>
						<p>{director}</p>
					</div>
				)}

				{producer.length > 0 && (
					<div className="col-sm-6">
						<h6>{pluralize("Producer", producer.length)}</h6>
						<p>{producer}</p>
					</div>
				)}

				{companies.length > 0 && (
					<div className="col-sm-6">
						<h6>{pluralize("Production Company", companies.length)}</h6>
						<p>{companies}</p>
					</div>
				)}
			</div>
		</section>
	</div>
);

export default ExtraDetails;
