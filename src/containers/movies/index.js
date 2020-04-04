import camelCase from "lodash/camelCase";
import isEmpty from "lodash/isEmpty";
import kebabCase from "lodash/kebabCase";
import React, { Component } from "react";
import { connect } from "react-redux";
import theMovieDb from "themoviedb-javascript-library";
import ListSection from "../../components/shared/ListSection";
import { API_REGION, movieCategories } from "../../constants";
import { addNowPlaying, addUpcoming } from "../../redux/action-creators/movie";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";

class Movies extends Component {
  componentDidMount() {
    const {
      addUpcoming,
      addNowPlaying,
      setTmdbErrorMsg,
      movie,
      match: {
        params: { category }
      }
    } = this.props;
    const { nowPlaying, upcoming } = movieCategories;

    if (isEmpty(movie)) {
      switch (category) {
        case kebabCase(upcoming):
          theMovieDb.movies.getUpcoming(
            { region: API_REGION, page: 1 },
            addUpcoming,
            setTmdbErrorMsg
          );

        case kebabCase(nowPlaying):
          theMovieDb.movies.getNowPlaying(
            { region: API_REGION, page: 1 },
            addNowPlaying,
            setTmdbErrorMsg
          );
      }
    }
  }

  render() {
    const {
      movie,
      tmdbResponse,
      match: {
        params: { category }
      }
    } = this.props;

    return (
      <ListSection
        name={movieCategories[`${camelCase(category)}`]}
        content={movie[`${camelCase(category)}`]}
        tmdbMsg={tmdbResponse.message}
      />
    );
  }
}

const actionCreators = {
  addNowPlaying,
  addUpcoming,
  setTmdbErrorMsg
};

const mapStateToProps = ({ movie, tmdbResponse }) => {
  return {
    movie,
    tmdbResponse
  };
};

export default connect(mapStateToProps, actionCreators)(Movies);
