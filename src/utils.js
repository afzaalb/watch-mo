import theMovieDb from 'themoviedb-javascript-library';

export const TMDB = (apiKey,baseURL,imagesURL,requestTimeout) => {
    theMovieDb.common.api_key = apiKey;
    theMovieDb.common.base_uri = baseURL;
    theMovieDb.common.images_uri = imagesURL;
    theMovieDb.common.timeout = requestTimeout;
};

export const handleRunTime = time => {
	const hours = parseInt(time / 60);
	const minutes = time % 60;
	return `${hours}h ${minutes}m`;
};

export const getMovieTorrents = movie => {
    let torrentList = [];
    const torrents = movie.map((t,index) => {
        return t.torrents.map((tor,index) => {
            return torrentList.push(tor);
        });
    });
    return torrentList;
}