import React, { Component } from "react";
import axios from "axios";
import classNames from "classnames";
import { GET_TORRENT_URL } from "../../constants";
import { getMovieTorrents } from "../../utils";

class Torrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      torrentList: [],
    };
  }

  componentDidMount() {
    axios
      .get(GET_TORRENT_URL + this.props.movie)
      .then((response) => {
        if (response.data.data.movies) {
          this.setState({
            torrentList: getMovieTorrents(response.data.data.movies),
            show: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { show, torrentList } = this.state;

    return (
      show && (
        <div className={classNames({ "d-none": !show })}>
          <h6>Download Now</h6>
          <p>
            {torrentList.map(({ url, hash, seeds, peers, quality, size }) => (
              <a
                href={url}
                key={hash}
                title={`Seeds: ${seeds} | Peers: ${peers}`}
                className="btn btn-light active mr-1 mb-2"
              >
                <span className="d-inline-block align-middle">
                  {quality}
                  <sup className="ml-1">({size})</sup>
                </span>
              </a>
            ))}
          </p>
        </div>
      )
    );
  }
}

export default Torrent;
