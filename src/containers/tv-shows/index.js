import camelCase from "lodash/camelCase";
import React, { Component } from "react";
import { connect } from "react-redux";
import ListSection from "../../components/shared/ListSection";
import { tvCategories } from "../../constants";
import {
  addAiringToday,
  addOnAir,
  addPopular,
  addTopRated,
} from "../../redux/action-creators/tvShows";
import { setTmdbErrorMsg } from "../../redux/action-creators/tmdb";
import { getTvShowsByCategoryInfo } from "../../utils";

class TvShows extends Component {
  componentDidMount() {
    const {
      addAiringToday,
      addOnAir,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      tvShows,
      match: {
        params: { category },
      },
    } = this.props;

    getTvShowsByCategoryInfo({
      tvShows,
      addAiringToday,
      addOnAir,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      category,
    });
  }

  componentDidUpdate(prevProps) {
    const {
      addAiringToday,
      addOnAir,
      addPopular,
      addTopRated,
      setTmdbErrorMsg,
      tvShows,
      match: {
        params: { category },
      },
    } = this.props;
    const { category: prevCategory } = prevProps.match.params;

    if (prevCategory !== category) {
      getTvShowsByCategoryInfo({
        tvShows,
        addAiringToday,
        addOnAir,
        addPopular,
        addTopRated,
        setTmdbErrorMsg,
        category,
      });
    }
  }

  render() {
    const {
      tvShows,
      tmdbResponse,
      match: {
        params: { category },
      },
    } = this.props;

    return (
      <ListSection
        isTvList
        name={tvCategories[`${camelCase(category)}`]}
        content={tvShows[`${camelCase(category)}`]}
        tmdbMsg={tmdbResponse.message}
      />
    );
  }
}

const actionCreators = {
  addAiringToday,
  addOnAir,
  addPopular,
  addTopRated,
  setTmdbErrorMsg,
};

const mapStateToProps = ({ tvShows, tmdbResponse }) => {
  return {
    tvShows,
    tmdbResponse,
  };
};

export default connect(mapStateToProps, actionCreators)(TvShows);
