import React, { Component, lazy } from "react";
import { getItemTrailer } from "../../utils";
import theMovieDb from "themoviedb-javascript-library";
import isEmpty from "lodash/isEmpty";
import NoDataFound from "../../components/shared/NoDataFound";
import Loader from "../../components/shared/Loader";
import Player from "../../components/item/Player";
import ItemDetails from "../../components/item/ItemDetails";
import GA from "react-ga";

const Recommendations = lazy(() =>
  import("../../components/item/Recommendations")
);

class TvItem extends Component {
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
    theMovieDb.tv.getById(
      {
        id,
        append_to_response:
          "videos,recommendations,images&include_image_language=en,null",
      },
      (data) => this.successCB(data, id),
      this.errorCB
    );
  };

  successCB = (data, id) => {
    const fetchedData = JSON.parse(data);
    this.setState(
      {
        loading: false,
        itemDetails: fetchedData,
      },
      () => {
        theMovieDb.tv.getCredits({ id }, this.creditsSuccessCB, this.errorCB);
      }
    );
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

  creditsSuccessCB = (data) => {
    const { itemDetails } = this.state;
    const fetchedData = JSON.parse(data);
    this.setState({
      itemDetails: { ...itemDetails, casts: fetchedData },
    });
  };

  handlePlayerState = () => {
    const { playing } = this.state;
    this.setState(
      {
        playing: !playing,
      },
      () => {
        this.state.playing &&
          GA.event({
            category: "Player",
            action: "Play trailer for tv show",
          });
      }
    );
  };

  render() {
    const { playing, itemDetails, tmdbResponse, loading } = this.state;
    const {
      name,
      status,
      overview,
      vote_average,
      first_air_date,
      poster_path,
      backdrop_path,
      genres,
      homepage,
      budget,
      revenue,
      runtime,
      imdb_id,
      recommendations,
      videos,
      images,
      seasons,
      production_companies,
    } = itemDetails;

    if (!isEmpty(itemDetails)) {
      var { backdrops, posters } = images;
      var { results } = videos;
    }

    if (!isEmpty(itemDetails.casts)) {
      var { cast, crew } = itemDetails.casts;
    }

    return !isEmpty(itemDetails) ? (
      <>
        {results.length > 0 && (
          <Player
            videoId={getItemTrailer(results)}
            poster={backdrop_path ? backdrop_path : poster_path}
            title={name}
            playing={playing}
            handlePlayerState={this.handlePlayerState}
          />
        )}
        <ItemDetails
          title={name}
          release={first_air_date}
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
          seasons={seasons}
          backdrops={posters || backdrops}
          cast={cast}
          crew={crew}
          productionCompanies={production_companies}
        />
        {recommendations && recommendations.results.length > 0 && (
          <Recommendations
            seasons={seasons}
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

export default TvItem;
