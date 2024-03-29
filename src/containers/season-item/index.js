import React, { Component } from "react";
import { getItemTrailer } from "../../utils";
import theMovieDb from "themoviedb-javascript-library";
import isEmpty from "lodash/isEmpty";
import NoDataFound from "../../components/shared/NoDataFound";
import Loader from "../../components/shared/Loader";
import Player from "../../components/item/Player";
import ItemDetails from "../../components/item/ItemDetails";
import EpisodesList from "../../components/season/EpisodesList";
import GA from "react-ga";

class SeasonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      itemDetails: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id, number } = this.props.match.params;
    this.getItemById(id, number);
  }

  componentDidUpdate(prevProps) {
    const { id, number } = this.props.match.params;
    if (id !== prevProps.match.params.id) {
      this.getItemById(id, number);
    }
  }

  getItemById = (id, season_number) => {
    theMovieDb.tvSeasons.getById(
      {
        id,
        season_number,
        append_to_response: "videos,images",
      },
      (data) => this.successCB(data, id, season_number),
      this.errorCB
    );
  };

  successCB = (data, id, season_number) => {
    const fetchedData = JSON.parse(data);
    this.setState(
      {
        loading: false,
        itemDetails: fetchedData,
      },
      () => {
        theMovieDb.tv.getCredits(
          { id, season_number },
          this.creditsSuccessCB,
          this.errorCB
        );
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
            action: "Play trailer for tv season",
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
      videos,
      images,
      episodes,
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
          id={this.props.match.params.id}
          title={`${this.props.match.params.name} | ${name}`}
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
          backdrops={posters || backdrops}
          cast={cast}
          crew={crew}
          productionCompanies={production_companies}
        >
          <EpisodesList
            showName={this.props.match.params.name}
            tvId={this.props.match.params.id}
            seasonNumber={this.props.match.params.number}
            episodes={episodes}
          />
        </ItemDetails>
      </>
    ) : tmdbResponse ? (
      <NoDataFound alignCenter spaceTop message={tmdbResponse} />
    ) : loading ? (
      <Loader spaceTop />
    ) : null;
  }
}

export default SeasonItem;
