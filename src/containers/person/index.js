import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import isEmpty from "lodash/isEmpty";
import ReactImageFallback from "react-image-fallback";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import NoDataFound from "../../components/shared/NoDataFound";
import Loader from "../../components/shared/Loader";
import PersonInfo from "../../components/person/PersonInfo";
import GalleryModal from "../../components/shared/gallery-modal";

class PeopleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personDetails: {},
      loading: true
    };
  }

  componentDidMount() {
    theMovieDb.people.getById(
      {
        id: this.props.match.params.id,
        append_to_response: "images,credits"
      },
      this.successCB,
      this.errorCB
    );
  }

  successCB = data => {
    const fetchedData = JSON.parse(data);
    this.setState({
      loading: false,
      personDetails: fetchedData
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
        loading: false,
        personDetails: {}
      });
    }
  };

  render() {
    const { personDetails, loading, tmdbResponse } = this.state;
    const {
      name,
      profile_path,
      gender,
      place_of_birth,
      birthday,
      biography,
      known_for_department,
      imdb_id,
      homepage,
      images
    } = personDetails;

    return !isEmpty(personDetails) ? (
      <section>
        <div className="row mb-3">
          <div className="col-xs-12 col-sm-5 person-poster">
            <GalleryModal title={name} images={images.profiles}>
              <ReactImageFallback
                src={`${IMAGE_URL}/w300` + profile_path}
                fallbackImage={FALLBACK_IMAGE}
                alt={name}
                className="img-fluid w-100"
              />
            </GalleryModal>
          </div>
          <div className="col-xs-12 col-sm-7 d-flex flex-column">
            <PersonInfo
              name={name}
              gender={gender}
              bornIn={place_of_birth}
              bornOn={birthday}
              bio={biography}
              known={known_for_department}
              imdb={imdb_id}
              home={homepage !== null && homepage}
            />
          </div>
          {/* {allImages.length > 2 && (
            <div className="col-xs-12 col-sm-12">Gallery was here</div>
          )} */}
        </div>
      </section>
    ) : tmdbResponse ? (
      <NoDataFound alignCenter spaceTop message={tmdbResponse} />
    ) : loading ? (
      <Loader spaceTop />
    ) : null;
  }
}

export default PeopleHome;
