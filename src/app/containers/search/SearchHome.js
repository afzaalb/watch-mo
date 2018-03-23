import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Content from "../../hoc/ContentWrapper";
import SearchStyles from "../../assets/css/search.css";

class SearchHome extends Component {
    render() {
        return (
            <div className="content all-smooth">
                <section className="movies-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2">
                                <input
                                    autoFocus="true"
                                    className="form-control mb-4"
                                    placeholder="Search for Movies, TV Shows or People"
                                />
                                <SearchResults />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SearchHome;
