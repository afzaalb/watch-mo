import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import { IMAGE_URL } from "../../constants";
import PersonInfo from "../../components/people/PersonInfo";

class PeopleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      loader: true
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
      loader: false,
      response: fetchedData,
      castCredit: fetchedData.credits.cast,
      gallery: fetchedData.images.profiles
    });
  };

  errorCB = data => {
    if (data) {
      this.setState({
        loader: false,
        tmdbResponse: JSON.parse(data).status_message
      });
    } else {
      this.setState({
        response: ""
      });
    }
  };

  render() {
    const { response, gallery } = this.state;

    let allImages = "";

    if (gallery != null && gallery != "") {
      allImages = gallery.map((img, i) => {
        return (
          <div className="px-3" key={img.file_path}>
            <img
              className="rounded w-100 h-100"
              src={`${IMAGE_URL}/w300` + img.file_path}
              alt={img.file_path}
            />
          </div>
        );
      });
    }

    return (
      <div className="w-100">
        <div className="row no-gutters mt-4 mb-5">
          <div className="col-xs-12 col-sm-5">
            <img
              className="img-fluid w-100"
              src={`${IMAGE_URL}/w300` + response.profile_path}
              alt={response.name}
            />
          </div>
          <div className="col-xs-12 col-sm-7 d-flex flex-column">
            <PersonInfo
              name={response.name}
              gender={response.gender}
              bornIn={response.place_of_birth}
              bornOn={response.birthday}
              bio={response.biography}
              known={response.known_for_department}
              imdb={response.imdb_id}
              home={response.homepage !== null && response.homepage}
            />
          </div>
          {allImages.length > 2 && (
            <div className="col-xs-12 col-sm-12">Gallery was here</div>
          )}
        </div>
      </div>
    );
  }
}

export default PeopleHome;
