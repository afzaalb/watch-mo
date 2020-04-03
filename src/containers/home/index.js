import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import HomeSection from "../../components/home/HomeSection";
import { addNowPlaying, addUpcoming } from "../../redux/action-creators/home";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

class Home extends Component {
  componentDidMount() {
    const { addUpcoming, addNowPlaying, setTmdbErrorMsg, home } = this.props;

    // Prevent repetitive calls and redux updates for home page
    if (isEmpty(home)) {
      theMovieDb.movies.getUpcoming(
        { region: "US" },
        addUpcoming,
        setTmdbErrorMsg
      );

      theMovieDb.movies.getNowPlaying(
        { region: "US" },
        addNowPlaying,
        setTmdbErrorMsg
      );
    }
  }

  render() {
    const { home, tmdbResponse } = this.props;
    const { nowPlaying, upcoming } = home;

    return (
      <>
        <HomeSection
          name="Now Playing"
          content={nowPlaying}
          tmdbMsg={tmdbResponse.message}
          route="/movies/now-playing"
        />
        <HomeSection
          name="Upcoming Movies"
          content={upcoming}
          tmdbMsg={tmdbResponse.message}
          route="/movies/upcoming"
        />
      </>
    );
  }
}

const actionCreators = {
  addNowPlaying,
  addUpcoming,
  setTmdbErrorMsg
};

const mapStateToProps = ({ home, tmdbResponse }) => {
  return {
    home,
    tmdbResponse
  };
};

export default connect(mapStateToProps, actionCreators)(Home);
