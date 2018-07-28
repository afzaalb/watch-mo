import React, { Component } from "react";
import theMovieDb from "themoviedb-javascript-library";
import Content from "../../hoc/ContentWrapper";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";

class PeopleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      loader: true
    };
  }

  componentDidMount = () => {
    theMovieDb.people.getById(
      {
        id: this.props.match.params.id,
        append_to_response: "images,credits"
      },
      this.successCB,
      this.errorCB
    );
  };

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
    const {
      response,
      tmdbResponse,
      loader,
      castCredit,
      gallery
    } = this.state;

    let allImages = "";

    if (gallery) {
      allImages = gallery.map((g, index) => {
        return (
          <div key={index}
            url={g.file_path}>
            {g.file_path}
          </div>
        );
      });
    }

    return (
      <Content isFlexed>
        <div className="container w-100">{allImages}</div>
      </Content>
    );
  }
}

export default PeopleHome;
