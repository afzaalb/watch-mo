import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import isEmpty from "lodash/isEmpty";
import ItemsList from "../../components/home/ItemsList";
import Loader from "../../components/shared/Loader";
import NoDataFound from "../../components/shared/NoDataFound";

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
    const fetchedData = JSON.parse(data);
    this.setState({
      loading: false,
      upcoming: fetchedData
    });
  };

  playingCB = data => {
    const fetchedData = JSON.parse(data);
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
        {!isEmpty(nowPlaying) ? (
          <ItemsList item={nowPlaying} name="Now playing" />
        ) : tmdbResponse ? (
          <NoDataFound alignCenter spaceTop message={tmdbResponse} />
        ) : loading ? (
          <Loader spaceTop />
        ) : null}
        {!isEmpty(upcoming) ? (
          <ItemsList item={upcoming} name="Upcoming movies" />
        ) : tmdbResponse ? (
          <NoDataFound alignCenter spaceTop message={tmdbResponse} />
        ) : loading ? (
          <Loader spaceTop />
        ) : null}
      </>
    );
  }
}

export default Home;
