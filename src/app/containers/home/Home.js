import React, { Component, Fragment } from "react";
import Grid from "../../hoc/ItemsGrid";
import Content from "../../hoc/ContentWrapper";
import theMovieDb from "themoviedb-javascript-library";
import Slot from "./Slot";
import Loader from "../../components/Loader";
import NoDataFound from "../../components/NoDataFound";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			upcoming: {},
			nowPlaying: {},
			loader: false
		};
	}

	componentDidMount = () => {
		theMovieDb.movies.getUpcoming(
			{ region: "US" },
			this.upcomingCB,
			this.errorCB
		);

		theMovieDb.movies.getNowPlaying(
			{ region: "US" },
			this.playingCB,
			this.errorCB
		);
	};

	upcomingCB = data => {
		const fetchedData = JSON.parse(data);
		this.setState({
      loader: false,
      upcoming: fetchedData
    });
	};

	playingCB = data => {
		const fetchedData = JSON.parse(data);
		this.setState({
      loader: false,
      nowPlaying: fetchedData
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
        upcoming: "",
				nowPlaying: ""
      });
    }
	};

	render() {
		const {
			upcoming,
			nowPlaying,
			loader,
			tmdbResponse
		} = this.state;

		let upcomingResults = <Loader />,
				nowPlayingResults = <Loader />;

		if (upcoming.total_results > 0) {
			upcomingResults = (
				<Fragment>
					<ul className="row no-gutters">
						{upcoming.results.map((m, index) => {
							return (
								<Slot
									key={m.id}
									id={m.id}
									name={m.title}
									cover={m.backdrop_path}
									release={m.release_date}
								/>
							);
						})}
					</ul>
				</Fragment>
			);
		} else if (tmdbResponse) {
      upcomingResults = (
				<NoDataFound
					noHorzMargin
					alignCenter
					spaceTop
					message={tmdbResponse} />
			);
    } else if (upcoming == "") {
      upcomingResults = (
        <NoDataFound
					noHorzMargin
          alignCenter
          spaceTop
          message="Perhaps a communications breakdown!"
        />
      );
    }

		if (nowPlaying.total_results > 0) {
			nowPlayingResults = (
				<Fragment>
					<ul className="row no-gutters">
						{nowPlaying.results.map((m, index) => {
							return (
								<Slot
									key={m.id}
									id={m.id}
									name={m.title}
									overview={m.overview}
									cover={m.backdrop_path}
									rating={m.vote_average}
								/>
							);
						})}
					</ul>
				</Fragment>
			);
		} else if (tmdbResponse) {
      nowPlayingResults = (
				<NoDataFound
					noHorzMargin
					alignCenter
					spaceTop
					message={tmdbResponse} />
			);
    } else if (nowPlaying == "") {
      nowPlayingResults = (
        <NoDataFound
					noHorzMargin
          alignCenter
          spaceTop
          message="Perhaps a communications breakdown!"
        />
      );
    }

		return(
			<Content isFlexed>
				<div className="d-flex flex-column flex-1-1-a w-100">
					<Grid name='Playing in theaters' results={nowPlayingResults} />
					<Grid name='Upcoming movies' results={upcomingResults} />
				</div>
			</Content>
		);
	}
}

export default Home;
