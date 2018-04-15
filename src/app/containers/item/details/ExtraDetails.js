import React from "react";
import pluralize from "pluralize";

const ExtraDetails = props => (
	<div className="col-md-8">
		<section className="pt-4 item-detail-meta">
			<div className="row">
				<div className="col-sm-6">
					<h6>Status</h6>
					<p>
						<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
							{props.status}
						</span>
					</p>
				</div>
				{props.link != null && (
					<div className="col-sm-6">
						<h6>Homepage</h6>
						<p>
							<a href={props.link}>
								<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
									{props.title}
								</span>
							</a>
						</p>
					</div>
				)}
				{props.budget > 0 && (
					<div className="col-sm-6">
						<h6>Budget</h6>
						<p>
							<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
								$ {props.budget}
							</span>
						</p>
					</div>
				)}
				{props.revenue > 0 && (
					<div className="col-sm-6">
						<h6>Revenue</h6>
						<p>
							<span className="gradient d-inline-block px-2 py-1 align-middle rounded">
								$ {props.revenue}
							</span>
						</p>
					</div>
				)}
				<div className="col-sm-6">
					<h6>{pluralize("Writer", props.writer.length)}</h6>
					<p>{props.writer}</p>
				</div>
				<div className="col-sm-6">
					<h6>{pluralize("Director", props.director.length)}</h6>
					<p>{props.director}</p>
				</div>
				<div className="col-sm-6">
					<h6>{pluralize("Producer", props.producer.length)}</h6>
					<p>{props.producer}</p>
				</div>
			</div>
		</section>
	</div>
);

export default ExtraDetails;
