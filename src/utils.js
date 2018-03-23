import theMovieDb from "themoviedb-javascript-library";

export const TMDB = () => {
    theMovieDb.common.api_key = "9aae8884ab2c82ebf94b47f136cc8c52";
    theMovieDb.common.base_uri = "https://api.themoviedb.org/3/";
    theMovieDb.common.images_uri = "https://image.tmdb.org/t/p/";
    theMovieDb.common.timeout = 30000;
};
