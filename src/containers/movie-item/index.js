import React, { Component } from "react";
import { getItemTrailer } from "../../utils";
import theMovieDb from "themoviedb-javascript-library";
import isEmpty from "lodash/isEmpty";
import NoDataFound from "../../components/shared/NoDataFound";
import Loader from "../../components/shared/Loader";
import Player from "../../components/item/Player";
import ItemDetails from "../../components/item/ItemDetails";
import Recommendations from "../../components/item/Recommendations";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      itemDetails: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getItemById(id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (id !== prevProps.match.params.id) {
      this.getItemById(id);
    }
  }

  getItemById = (id) => {
    theMovieDb.movies.getById(
      {
        id,
        append_to_response:
          "videos,casts,recommendations,images&include_image_language=en,null",
      },
      this.successCB,
      this.errorCB
    );
  };

  successCB = (data) => {
    const fetchedData = JSON.parse(data);
    this.setState({
      loading: false,
      itemDetails: fetchedData,
    });
  };

  errorCB = (data) => {
    if (data) {
      this.setState({
        loading: false,
        tmdbResponse: JSON.parse(data).status_message,
      });
    } else {
      this.setState({
        loading: false,
        itemDetails: {},
      });
    }
  };

  handlePlayerState = () => {
    const { playing } = this.state;
    this.setState({
      playing: !playing,
    });
  };

  render() {
    const { playing, itemDetails, tmdbResponse, loading } = this.state;
    const {
      title,
      status,
      overview,
      vote_average,
      release_date,
      poster_path,
      backdrop_path,
      genres,
      homepage,
      budget,
      revenue,
      runtime,
      imdb_id,
      casts,
      recommendations,
      videos,
      images,
      production_companies,
    } = itemDetails;

    if (!isEmpty(itemDetails)) {
      var { cast, crew } = casts;
      var { backdrops, posters } = images;
      var { results } = videos;
    }

    return !isEmpty(itemDetails) ? (
      <>
        {results.length > 0 && (
          <Player
            videoId={getItemTrailer(results)}
            poster={backdrop_path ? backdrop_path : poster_path}
            title={title}
            playing={playing}
            handlePlayerState={this.handlePlayerState}
          />
        )}
        <ItemDetails
          title={title}
          release={release_date}
          genres={genres}
          runtime={runtime}
          overview={overview}
          rating={vote_average}
          poster={poster_path}
          status={status}
          link={homepage}
          budget={budget}
          revenue={revenue}
          imdb={imdb_id}
          backdrops={posters || backdrops}
          cast={cast}
          crew={crew}
          productionCompanies={production_companies}
        />
        {recommendations && recommendations.results.length > 0 && (
          <Recommendations
            recommendations={recommendations.results.slice(0, 3)}
          />
        )}
      </>
    ) : tmdbResponse ? (
      <NoDataFound alignCenter spaceTop message={tmdbResponse} />
    ) : loading ? (
      <Loader spaceTop />
    ) : null;
  }
}

export default MovieItem;
