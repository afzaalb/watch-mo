import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import HomeSection from "../../components/home/HomeSection";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: {},
      nowPlaying: {},
      loading: true
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
    const { results } = JSON.parse(data);
    const fetchedData = results.slice(0, 6);

    this.setState({
      loading: false,
      upcoming: fetchedData
    });
  };

  playingCB = data => {
    const { results } = JSON.parse(data);
    const fetchedData = results.slice(0, 6);

    this.setState({
      loading: false,
      nowPlaying: fetchedData
    });
  };

  errorCB = data => {
    if (data) {
      this.setState({
        loading: false,
        tmdbResponse: JSON.parse(data).status_message
      });
    } else {
      this.setState({
        loading: false,
        upcoming: {},
        nowPlaying: {}
      });
    }
  };

  render() {
    const { upcoming, nowPlaying, tmdbResponse, loading } = this.state;

    return (
      <>
        <HomeSection
          name="Now Playing"
          content={nowPlaying}
          tmdbResponse={tmdbResponse}
          loading={loading}
          route="/movies/now-playing"
        />
        <HomeSection
          name="Upcoming Movies"
          content={upcoming}
          tmdbResponse={tmdbResponse}
          loading={loading}
          route="/movies/upcoming"
        />
      </>
    );
  }
}

export default Home;
