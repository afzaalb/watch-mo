import React, { Component, Fragment } from "react";
import theMovieDb from "themoviedb-javascript-library";
import Slot from "./Slot";
import NoDataFound from "../../components/NoDataFound";

class ItemsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { id: "1", name: "Narcos", tagline: "Tag line here" },
                { id: "2", name: "The Departed", tagline: "Tag line here" },
                { id: "3", name: "Insomnia", tagline: "Tag line here" },
                { id: "4", name: "Inception", tagline: "Tag line here" }
            ]
        };
    }

	successCB = data => {
		console.log()
	}

	errorCB = data => {
		console.log();
	}

    componentDidMount = () => {
		theMovieDb.movies.getNowPlaying({region:'US'},this.successCB,this.errorCB);
    }

    render() {
        const { movies } = this.state;

        let results = <NoDataFound alignCenter message="No Results Found" />;

        if (movies) {
            results = (
                <Fragment>
                    <h4>This Week (20 - 27)</h4>
                    <ul className="row no-gutters">
                        {movies.map((m, index) => {
                            return (
                                <Slot
                                    key={m.id}
                                    id={m.id}
                                    name={m.name}
                                    tagline={m.tagline}
                                />
                            );
                        })}
                    </ul>
                </Fragment>
            );
        }

        return (
            <section className="movies-section w-100">
                <div className="container h-100">{results}</div>
            </section>
        );
    }
}

export default ItemsGrid;
