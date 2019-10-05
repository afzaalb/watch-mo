import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import Slot from "../../components/item/Slot";
import Loader from "../../components/shared/Loader";
import NoDataFound from "../../components/shared/NoDataFound";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: {},
      nowPlaying: {},
      loader: false
    };
  }

  componentDidMount() {
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
  }

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
    const { upcoming, nowPlaying, tmdbResponse } = this.state;

    let upcomingResults = <Loader />,
      nowPlayingResults = <Loader />;

    if (upcoming.total_results > 0) {
      upcomingResults = upcoming.results.map((m, index) => {
        return (
          <Slot
            category="Upcoming movies"
            key={m.id}
            id={m.id}
            name={m.title}
            cover={m.backdrop_path}
            release={m.release_date}
          />
        );
      });
    } else if (tmdbResponse) {
      upcomingResults = (
        <NoDataFound noHorzMargin alignCenter spaceTop message={tmdbResponse} />
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
      nowPlayingResults = nowPlaying.results.map((m, index) => {
        return (
          <Slot
            category="Now playing"
            key={m.id}
            id={m.id}
            name={m.title}
            overview={m.overview}
            cover={m.backdrop_path}
            rating={m.vote_average}
          />
        );
      });
    } else if (tmdbResponse) {
      nowPlayingResults = (
        <NoDataFound noHorzMargin alignCenter spaceTop message={tmdbResponse} />
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

    return (
      <section>
        <h4>Home</h4>
      </section>
    );
  }
}

export default Home;
