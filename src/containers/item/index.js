import React, { Component, Fragment } from "react";
import { getCrewMembersByType } from "../../utils";
import theMovieDb from "themoviedb-javascript-library";
import map from "lodash/map";
import NoDataFound from "../../components/shared/NoDataFound";
import Loader from "../../components/shared/Loader";
import Player from "../../components/item/Player";
import ItemMeta from "../../components/item/ItemMeta";
import Synopsis from "../../components/item/Synopsis";
import FullCast from "../../components/item/FullCast";
import ExtraDetails from "../../components/item/ExtraDetails";
import Recommendations from "../../components/item/Recommendations";

class ItemHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      itemDetails: {},
      loading: true
    };
  }

  componentDidMount() {
    theMovieDb.movies.getById(
      {
        id: this.props.match.params.id,
        append_to_response: "videos,casts,recommendations"
      },
      this.successCB,
      this.errorCB
    );
  }

  successCB = data => {
    const fetchedData = JSON.parse(data);
    this.setState({
      loading: false,
      itemDetails: fetchedData
    });
  };

  errorCB = data => {
    if (data) {
      this.setState({
        loading: false,
        tmdbResponse: JSON.parse(data).status_message
      });
    } else {
      this.setState({
        itemDetails: ""
      });
    }
  };

  handlePlayerState = () => {
    const { playing } = this.state;
    this.setState({
      playing: !playing
    });
  };

  render() {
    const { playing, itemDetails, tmdbResponse, loading } = this.state;

    if (itemDetails) {
      var {
        title,
        status,
        overview,
        release_date,
        homepage,
        budget,
        revenue,
        runtime,
        imdb_id,
        casts,
        recommendations,
        genres,
        production_companies,
        videos
      } = itemDetails;
    }
    if (casts) {
      var { cast, crew } = casts;
    }

    let dataLoaded = "";
    if (title && overview) {
      dataLoaded = (
        <Fragment>
          <Player
            videoId={
              videos && videos.results.length > 0 ? videos.results[0].key : null
            }
            poster={
              itemDetails.backdrop_path
                ? itemDetails.backdrop_path
                : itemDetails.poster_path
            }
            title={itemDetails.title}
            playing={playing}
            handlePlayerState={this.handlePlayerState}
          />
          <ItemMeta
            title={title}
            release={release_date}
            genres={genres}
            runtime={runtime}
            imdb={imdb_id}
          />
          <Synopsis
            show={playing}
            description={itemDetails.overview}
            rating={itemDetails.vote_average}
          />
          {getCrewMembersByType(crew, "Writer")}
          {getCrewMembersByType(crew, "Director")}
          {getCrewMembersByType(crew, "Producer")}
          {production_companies &&
            map(production_companies, p => (
              <span
                key={p.id}
                className="d-inline-block px-2 py-1 align-middle rounded"
              >
                {p.name}
              </span>
            ))}
          <div className="row">
            <ExtraDetails
              title={title}
              status={status}
              link={homepage}
              budget={budget}
              revenue={revenue}
              imdb={imdb_id}
            />
            {recommendations.total_results > 0 && (
              <Recommendations recommendations={recommendations} />
            )}
            {cast && cast.length > 0 && <FullCast cast={cast} />}
          </div>
        </Fragment>
      );
    } else if (tmdbResponse) {
      dataLoaded = <NoDataFound alignCenter spaceTop message={tmdbResponse} />;
    } else if (itemDetails == "") {
      dataLoaded = (
        <NoDataFound
          alignCenter
          spaceTop
          message="Perhaps a communications breakdown!"
        />
      );
    }

    return loading ? <Loader spaceTop /> : dataLoaded;
  }
}

export default ItemHome;
