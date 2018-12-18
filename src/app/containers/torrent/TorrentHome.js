import React,{ Component } from 'react';
import { TorrQuery } from "../../../constants";
import { getMovieTorrents } from "../../../utils";
import axios from 'axios';
import classNames from 'classnames';

class TorrentHome  extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            torrentList: []
        }
    }

    componentDidMount(){
        axios.get(`${TorrQuery+this.props.movie}`)
        .then(response => {
            if ( response.data.data.movies ) {
                this.setState({
                    torrentList: getMovieTorrents(response.data.data.movies),
                    show: true
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        const {
            show,
            torrentList
        } = this.state;

        let allTorrents;
        if(torrentList.length > 0){
            allTorrents = torrentList.map((torrent,index) => {
                return(
                    <a key={torrent.hash} href={torrent.url} title={`Seeds: ${torrent.seeds} | Peers: ${torrent.peers}`}>
                        <span className="gradient d-inline-block px-2 py-1 align-middle rounded">
                            {torrent.quality}
                            <sup className="ml-1">({torrent.size})</sup>
                        </span>
                    </a>
                );
            })
        }

        return(
            <div className={classNames("col-sm-6",{'d-none': !show})}>
                <h6>Download Now</h6>
                <p>{allTorrents}</p>
            </div>
        );
    }
}

export default TorrentHome;
