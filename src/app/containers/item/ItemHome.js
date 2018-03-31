import React, { Component, Fragment } from "react";
import { TMDB } from "../../../utils.js";
import theMovieDb from "themoviedb-javascript-library";
import { Link } from "react-router-dom";
import { ImageURL } from "../../../constants";
import ItemDetailStyles from "../../assets/css/movie-detail.css";
import classNames from "classnames";
import Content from "../../hoc/ContentWrapper";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import ItemPoster from "./ItemPoster";
import ItemMeta from "./ItemMeta";
import Player from "./Player";
import Synopsis from "./Synopsis";
import FullCast from "./details/FullCast";
import ExtraDetails from "./details/ExtraDetails";
import Avatar from '../../assets/images/avatar.png';

class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                playerVars: {
                    enablejsapi: 1,
                    showinfo: 0,
                    controls: 0,
                    autoplay: 0,
                    rel: 0
                }
            },
            playing: false,
            response: {},
            trailerKey: "",
			loader: true
        };
        TMDB();
    }

    componentDidMount() {
        theMovieDb.movies.getById(
            { id: this.props.match.params.id, append_to_response: "videos,casts" },
            this.successCB,
            this.errorCB
        );
    }

    successCB = data => {
        const fetchedData = JSON.parse(data);
        this.setState({
			loader: false,
            response: fetchedData,
            completeCast: fetchedData.casts.cast
        });
    };

    errorCB = data => {
		if (data){
	        this.setState({
				loader: false,
				tmdbResponse: JSON.parse(data).status_message
	        });
		} else {
			this.setState({
				response: ''
	        });
		}
    };

    handlePlayerState = event => {
        if (
            event.data === YT.PlayerState.PLAYING ||
            event.data === YT.PlayerState.BUFFERING
        ) {
            this.setState({
                playing: true
            });
        } else {
            this.setState({
                playing: false
            });
        }
    };

    render() {
        const {
            options,
            playing,
            response,
            trailerKey,
            completeCast,
			tmdbResponse,
			loader
        } = this.state;

        let genreList = "";
        if (response.genres) {
            genreList = response.genres.map((g, index) => {
                return <span key={g.id}>{g.name}</span>;
            });
        }

        let topCastList = "";
        let allCastList = "";
        if (response.casts) {
            const shallowCastCopy = [...completeCast];
            allCastList = shallowCastCopy.map((k, index) => {
                return (
                    <li className="col-sm-4 media mb-4" key={k.cast_id}>
                        <img
                            width="66"
                            height="66"
                            className={classNames('cast mini-cast rounded-circle mb-3 mr-2',{ 'border-0': !k.profile_path })}
                            src={k.profile_path ? ImageURL + `/w66_and_h66_face` + k.profile_path : Avatar }
                            alt={k.name}
                            title={k.name + ` as ` + k.character}
                        />
                        <div className="media-body">
                            <p className="mt-0 mb-1 bold">{k.name}</p>
                            <p className="my-0">{k.character}</p>
                        </div>
                    </li>
                );
            });

            const slicedCastCopy = shallowCastCopy.splice(0, 3);
            topCastList = slicedCastCopy.map((k, index) => {
                return (
                    <li className="mb-3 mr-2" key={k.id}>
                        <img
                            width="66"
                            height="66"
                            className={classNames('cast mini-cast rounded-circle',{ 'border-0': !k.profile_path })}
                            src={k.profile_path ? ImageURL + `/w66_and_h66_face` + k.profile_path : Avatar }
                            alt={k.name}
                            title={k.name + ` as ` + k.character}
                        />
                    </li>
                );
            });
        }

        let dataLoaded = <Loader spaceTop />;
        if (response.title && response.overview) {
            dataLoaded = (
                <Fragment>
                    <ItemPoster poster={response.backdrop_path != null ? response.backdrop_path : response.poster_path } />
                    <div className="card-video-splitter mt-4 mb-5">
                        <Player
                            scale={playing}
                            running={this.handlePlayerState}
                            options={options}
                            source={response.videos.results.length > 0 ? response.videos.results[0].key : null}
                        />
                        <ItemMeta
                            show={playing}
                            title={response.title}
                            release={response.release_date}
                            genres={genreList}
                            topCast={topCastList}
                            runtime={response.runtime}
                            imdb={response.imdb_id}
                        />
                        <Synopsis
                            show={playing}
                            description={response.overview}
                        />
                    </div>
					{
						allCastList.length > 0 && (
							<FullCast casts={allCastList} />
						)
					}
					<ExtraDetails />
                </Fragment>
            );
        }  else if (tmdbResponse) {
            dataLoaded = (
                <NoDataFound
                    alignCenter
                    spaceTop
                    message={tmdbResponse}
                />
            );
        } else if (response == '') {
			dataLoaded = (
                <NoDataFound
                    alignCenter
                    spaceTop
                    message="Perhaps a communications breakdown!"
                />
            );
        }

        return (
            <Content isFlexed>
                <div className="container w-100">{dataLoaded}</div>
            </Content>
        );
    }
}

export default ItemInfo;
