import React, { Component, Fragment } from "react";
import theMovieDb from "themoviedb-javascript-library";
import { Link } from "react-router-dom";
import { ImageURL } from "../../../constants";
import ItemDetailStyles from "../../assets/css/movie-detail.css";
import classNames from "classnames";
import Content from "../../hoc/ContentWrapper";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import ItemPoster from "./ItemPoster";
import ItemMeta from "./ItemMeta";
import Player from "./Player";
import Synopsis from "./Synopsis";
import TopCastMember from "./TopCastMember";
import FullCast from "./details/FullCast";
import FullCastMember from "./details/FullCastMember";
import Recommendations from "./details/Recommendations";
import ExtraDetails from "./details/ExtraDetails";
import EachRecommendation from "./details/EachRecommendation";
import Avatar from "../../assets/images/avatar.png";
import slug from "slug";

slug.defaults.mode = "rfc3986";

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				playerVars: {
					enablejsapi: 1,
					showinfo: 0,
					controls: 0,
					autoplay: 0,
					rel: 0
				}
			},
			playing: false,
			response: {},
			trailerKey: "",
			loader: true,
			showing: false
		};
	}

	componentDidMount = () => {
		theMovieDb.movies.getById(
			{
				id: this.props.match.params.id,
				append_to_response: "videos,casts,recommendations"
			},
			this.successCB,
			this.errorCB
		);
	};

	successCB = data => {
		const fetchedData = JSON.parse(data);
		this.setState({
			loader: false,
			response: fetchedData,
			completeCast: fetchedData.casts.cast,
			completeCrew: fetchedData.casts.crew,
			recommendations: fetchedData.recommendations
		});
	};

	errorCB = data => {
		if (data) {
			this.setState({
				loader: false,
				tmdbResponse: JSON.parse(data).status_message
			});
		} else {
			this.setState({
				response: ""
			});
		}
	};

	handlePlayerState = event => {
		if (
			event.data === YT.PlayerState.PLAYING ||
			event.data === YT.PlayerState.BUFFERING
		) {
			this.setState({
				playing: true
			});
		} else {
			this.setState({
				playing: false
			});
		}
	};

	toggleFullCast = () => {
		this.setState({
			showing: !this.state.showing
		});
	};

	render() {
		const {
			options,
			playing,
			response,
			trailerKey,
			completeCast,
			tmdbResponse,
			loader,
			showing,
			completeCrew,
			recommendations
		} = this.state;

		let genreList = "",
			topCastList = "",
			allCastList = "",
			allWriters = "",
			allDirectors = "",
			allProducers = "",
			allRecommendations = "";

		if (response.genres) {
			genreList = response.genres.map((g, index) => {
				return <span key={g.id}>{g.name}</span>;
			});
		}

		if (response.casts) {
			const writerList	= _.filter(completeCrew, function (obj) { return obj.job === 'Writer' || obj.job === 'Screenplay'; });
			allWriters = writerList.map((crew, index) => {
				return (
					<span key={crew.credit_id} className="gradient d-inline-block px-2 py-1 align-middle rounded">
						{crew.name}
					</span>
				);
			});

			const directorList 	= _.filter(completeCrew, function (obj) { return obj.job === 'Director'; });
			allDirectors = directorList.map((crew, index) => {
				return (
					<span key={crew.credit_id} className="gradient d-inline-block px-2 py-1 align-middle rounded">
						{crew.name}
					</span>
				);
			});

			const producerList 	= _.filter(completeCrew, function (obj) { return obj.job === 'Producer'; });
			allProducers = producerList.map((crew, index) => {
				return (
					<span key={crew.credit_id} className="gradient d-inline-block px-2 py-1 align-middle rounded">
						{crew.name}
					</span>
				);
			});

			const shallowCastCopy = [...completeCast];
			allCastList = shallowCastCopy.map((k, index) => {
				return (
					<FullCastMember
						key={k.cast_id}
						id={k.id}
						name={k.name}
						character={k.character}
						profile={k.profile_path}
					/>
				);
			});

			const slicedCastCopy = shallowCastCopy.splice(0, 3);
			topCastList = slicedCastCopy.map((k, index) => {
				return (
					<TopCastMember
						key={k.id}
						id={k.id}
						name={k.name}
						character={k.character}
						profile={k.profile_path}
					/>
				);
			});
		}

		if (recommendations) {
			const slicedRec = recommendations.results.splice(0, 5);
			allRecommendations = slicedRec.map((r, index) => {
				return (
					<EachRecommendation
						key={r.id}
						id={r.id}
						name={r.title}
						poster={
							r.poster_path != null ? r.poster_path : r.backdrop_path
						}
						rating={r.vote_average}
					/>
				);
			});
		}


		let dataLoaded = "";
		if (response.title && response.overview) {
			dataLoaded = (
				<Fragment>
					<ItemPoster
						poster={
							response.backdrop_path != null
								? response.backdrop_path
								: response.poster_path
						}
					/>
					<div className="card-video-splitter mt-4 mb-5">
						<Player
							scale={playing}
							running={this.handlePlayerState}
							options={options}
							source={
								response.videos.results.length > 0
									? response.videos.results[0].key
									: null
							}
						/>
						<ItemMeta
							show={playing}
							title={response.title}
							release={response.release_date}
							genres={genreList}
							topCast={topCastList}
							runtime={response.runtime}
							imdb={response.imdb_id}
						/>
						<Synopsis
							show={playing}
							description={response.overview}
						/>
					</div>
					<div className="row">
						<ExtraDetails
							title={response.title}
							status={response.status}
							writer={allWriters}
							director={allDirectors}
							producer={allProducers}
							link={response.homepage}
							budget={response.budget}
							revenue={response.revenue}
						/>
					{recommendations.total_results > 0 && <Recommendations list={allRecommendations} />}
						{allCastList.length > 0 && (
							<FullCast
								count={allCastList.length}
								casts={allCastList}
								toggle={showing}
								showAll={this.toggleFullCast}
							/>
						)}
					</div>
				</Fragment>
			);
		} else if (tmdbResponse) {
			dataLoaded = (
				<NoDataFound alignCenter spaceTop message={tmdbResponse} />
			);
		} else if (response == "") {
			dataLoaded = (
				<NoDataFound
					alignCenter
					spaceTop
					message="Perhaps a communications breakdown!"
				/>
			);
		}

		return (
			<Content isFlexed>
				<div className="container w-100">
					{loader ? <Loader spaceTop /> : dataLoaded}
				</div>
			</Content>
		);
	}
}

export default ItemInfo;
