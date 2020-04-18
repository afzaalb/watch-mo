import React from "react";
import debounce from "lodash/debounce";
import filter from "lodash/filter";
import Loader from "../../components/shared/Loader";
import theMovieDb from "themoviedb-javascript-library";
import FormControl from "react-bootstrap/FormControl";
import SearchIcon from "react-bytesize-icons/Search";
import { SEARCH_DELAY, filterTypes } from "../../constants";
import Filters from "../../components/search/Filters";
import SearchResults from "../../components/search/SearchResults";

class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      loading: false,
      selectedFilters: [filterTypes.ALL],
      filteredResults: [],
    };
  }

  delayedCallback = debounce((value) => {
    this.setState({
      loading: true,
    });
    theMovieDb.search.getMulti(
      { query: value, include_adult: true },
      this.successCB,
      this.errorCB
    );
  }, SEARCH_DELAY);

  successCB = (data) => {
    const { results: searchResults } = JSON.parse(data);

    this.setState({ searchResults }, () => this.searchFilterHandler());
  };

  errorCB = (data) => {
    if (data) {
      this.setState({
        loading: false,
        tmdbResponse: JSON.parse(data).status_message,
      });
    } else {
      this.setState({
        searchResults: [],
        loading: false,
      });
    }
  };

  handleSearch = (e) => {
    const { value } = e.target;
    if (value.length) {
      e.persist();
      this.delayedCallback(value);
    }
  };

  searchFilterHandler = () => {
    const { searchResults, selectedFilters } = this.state;
    if (selectedFilters.includes(filterTypes.ALL)) {
      this.setState({ loading: false, filteredResults: searchResults });
    } else {
      const filteredResults = filter(searchResults, ({ media_type }) =>
        selectedFilters.includes(media_type)
      );

      this.setState({ loading: false, filteredResults });
    }
  };

  setFilterHandler = (filterType) => {
    const { selectedFilters } = this.state;
    const updatedFilters = !selectedFilters.includes(filterType)
      ? [...selectedFilters, filterType]
      : filter(selectedFilters, (f) => f !== filterType);

    this.setState({ selectedFilters: updatedFilters }, () =>
      this.searchFilterHandler()
    );
  };

  render() {
    const {
      filteredResults,
      tmdbResponse,
      loading,
      selectedFilters,
    } = this.state;

    return (
      <>
        <div className="search-bar position-relative">
          <FormControl
            placeholder="Search for Movies, TV Shows or People"
            onChange={(e) => this.handleSearch(e)}
          />
          <span className="submit position-absolute">
            <SearchIcon width="24" height="24" strokeWidth="1.5px" />
          </span>
        </div>
        <Filters
          selectedFilters={selectedFilters}
          setFilterHandler={this.setFilterHandler}
        />
        {loading ? (
          <Loader spaceTop />
        ) : (
          <SearchResults
            tmdbResponse={tmdbResponse}
            filteredResults={filteredResults}
          />
        )}
      </>
    );
  }
}

export default SearchHome;
