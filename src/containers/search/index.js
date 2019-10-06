import React from "react";
import debounce from "lodash/debounce";
import Loader from "../../components/shared/Loader";
import theMovieDb from "themoviedb-javascript-library";
import FormControl from "react-bootstrap/FormControl";
import SearchIcon from "react-bytesize-icons/Search";
import { SEARCH_DELAY } from "../../constants";
import SearchResults from "../../components/search/SearchResults";

class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      loading: false
    };
  }

  delayedCallback = debounce(value => {
    this.setState({
      loading: true
    });
    theMovieDb.search.getMulti({ query: value }, this.successCB, this.errorCB);
  }, SEARCH_DELAY);

  successCB = data => {
    this.setState({
      loading: false,
      searchResults: JSON.parse(data)
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
        searchResults: [],
        loading: false
      });
    }
  };

  handleSearch = e => {
    const { value } = e.target;
    if (value.length) {
      e.persist();
      this.delayedCallback(value);
    }
  };

  render() {
    const { searchResults, tmdbResponse, loading } = this.state;

    return (
      <>
        <div className="search-bar position-relative">
          <FormControl
            placeholder="Search for Movies, TV Shows or People"
            onChange={e => this.handleSearch(e)}
          />
          <span className="submit position-absolute">
            <SearchIcon width="24" height="24" strokeWidth="1.5px" />
          </span>
        </div>
        {loading ? (
          <Loader spaceTop />
        ) : (
          <SearchResults
            tmdbResponse={tmdbResponse}
            searchResults={searchResults}
          />
        )}
      </>
    );
  }
}

export default SearchHome;
