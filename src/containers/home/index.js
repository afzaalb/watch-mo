import kebabCase from "lodash/kebabCase";
import map from "lodash/map";
import React, { Component } from "react";
import { connect } from "react-redux";
import ListSection from "../../components/shared/ListSection";
import { mediaTypes, movieCategories } from "../../constants";
import {
  addNowPlaying,
  addUpcoming,
  addPopular,
  addTopRated,
} from "../../redux/action-creators/movies";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";
import { getMoviesByCategoryInfo } from "../../utils";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      itemDetails: {},
      loading: true,
    };
  }

  componentDidMount() {
    const {
      addUpcoming,
      addNowPlaying,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      movies,
    } = this.props;

    getMoviesByCategoryInfo({
      movies,
      addUpcoming,
      addNowPlaying,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
    });
  }

  render() {
    const { movies, tmdbResponse } = this.props;
    const { MOVIE } = mediaTypes;

    return map(movieCategories, (category, i) => (
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
  addPopular,
  addTopRated,
  setTmdbErrorMsg,
};

const mapStateToProps = ({ movies, tmdbResponse }) => {
  return {
    movies,
    tmdbResponse,
  };
};

export default connect(mapStateToProps, actionCreators)(Home);
