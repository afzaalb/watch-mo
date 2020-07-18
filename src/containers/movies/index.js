import camelCase from "lodash/camelCase";
import React, { Component } from "react";
import { connect } from "react-redux";
import ListSection from "../../components/shared/ListSection";
import { movieCategories } from "../../constants";
import {
  addNowPlaying,
  addUpcoming,
  addPopular,
  addTopRated,
} from "../../redux/action-creators/movies";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";
import { getMoviesByCategoryInfo } from "../../utils";

class Movies extends Component {
  componentDidMount() {
    const {
      addUpcoming,
      addNowPlaying,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      movies,
      match: {
        params: { category },
      },
    } = this.props;

    getMoviesByCategoryInfo({
      movies,
      addUpcoming,
      addNowPlaying,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      category,
    });
  }

  componentDidUpdate(prevProps) {
    const {
      addUpcoming,
      addNowPlaying,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      movies,
      match: {
        params: { category },
      },
    } = this.props;
    const { category: prevCategory } = prevProps.match.params;

    if (prevCategory !== category) {
      getMoviesByCategoryInfo({
        movies,
        addUpcoming,
        addNowPlaying,
        addPopular,
        addTopRated,
        setTmdbErrorMsg,
        category,
      });
    }
  }

  render() {
    const {
      movies,
      tmdbResponse,
      match: {
        params: { category },
      },
    } = this.props;

    return (
      <ListSection
        name={movieCategories[`${camelCase(category)}`]}
        content={movies[`${camelCase(category)}`]}
        tmdbMsg={tmdbResponse.message}
      />
    );
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

export default connect(mapStateToProps, actionCreators)(Movies);
