import kebabCase from "lodash/kebabCase";
import map from "lodash/map";
import React, { Component } from "react";
import { connect } from "react-redux";
import ListSection from "../../components/shared/ListSection";
import { mediaTypes, movieCategories } from "../../constants";
import { addNowPlaying, addUpcoming } from "../../redux/action-creators/movie";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";
import { getMoviesByCategoryInfo } from "../../utils";

class Home extends Component {
  componentDidMount() {
    const { addUpcoming, addNowPlaying, setTmdbErrorMsg, movies } = this.props;

    getMoviesByCategoryInfo(
      movies,
      addUpcoming,
      addNowPlaying,
      setTmdbErrorMsg
    );
  }

  render() {
    const { movies, tmdbResponse } = this.props;
    const { nowPlaying, upcoming } = movieCategories;
    const { MOVIE } = mediaTypes;

    const homeMovieCategories = { nowPlaying, upcoming };

    return map(homeMovieCategories, (category, i) => (
      <ListSection
        key={i}
        name={category}
        content={movies[i] && movies[i].slice(0, 6)}
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

const mapStateToProps = ({ movies, tmdbResponse }) => {
  return {
    movies,
    tmdbResponse,
  };
};

export default connect(mapStateToProps, actionCreators)(Home);
