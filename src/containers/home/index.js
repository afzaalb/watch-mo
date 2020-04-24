import isEmpty from "lodash/isEmpty";
import kebabCase from "lodash/kebabCase";
import map from "lodash/map";
import React, { Component } from "react";
import { connect } from "react-redux";
import theMovieDb from "themoviedb-javascript-library";
import ListSection from "../../components/shared/ListSection";
import { API_REGION, mediaTypes, movieCategories } from "../../constants";
import { addNowPlaying, addUpcoming } from "../../redux/action-creators/movie";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";

class Home extends Component {
  componentDidMount() {
    const { addUpcoming, addNowPlaying, setTmdbErrorMsg, movie } = this.props;

    if (isEmpty(movie.upcoming)) {
      theMovieDb.movies.getUpcoming(
        { region: API_REGION },
        addUpcoming,
        setTmdbErrorMsg
      );
    }

    if (isEmpty(movie.nowPlaying)) {
      theMovieDb.movies.getNowPlaying(
        { region: API_REGION },
        addNowPlaying,
        setTmdbErrorMsg
      );
    }
  }

  render() {
    const { movie, tmdbResponse } = this.props;
    const { nowPlaying, upcoming } = movieCategories;
    const { MOVIE } = mediaTypes;

    const homeMovieCategories = { nowPlaying, upcoming };

    return map(homeMovieCategories, (category, i) => (
      <ListSection
        key={i}
        name={category}
        content={movie[i] && movie[i].slice(0, 6)}
        tmdbMsg={tmdbResponse.message}
        route={`/${MOVIE}/${kebabCase(category)}`}
      />
    ));
  }
}

const actionCreators = {
  addNowPlaying,
  addUpcoming,
  setTmdbErrorMsg,
};

const mapStateToProps = ({ movie, tmdbResponse }) => {
  return {
    movie,
    tmdbResponse,
  };
};

export default connect(mapStateToProps, actionCreators)(Home);
