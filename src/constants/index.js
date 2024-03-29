// Generic Constants
export const API_KEY = process.env.TMDB_KEY;
export const API_URL = `https://api.themoviedb.org/3/`;
export const API_REGION = "US";
export const REQ_TIMEOUT = 15000;
export const IMAGE_URL = `https://image.tmdb.org/t/p`;
export const COVER_URL = `${IMAGE_URL}/original`;
export const IMDB_TITLE = `https://www.imdb.com/title/`;
export const IMDB_NAME_URL = `https://www.imdb.com/name/`;
export const YTS_URL = `https://yts.mx/`;
export const GET_TORRENT_URL = `${YTS_URL}api/v2/list_movies.json?query_term=`;
export const SEARCH_DELAY = 1000;
export const FALLBACK_IMAGE = `data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTc4LjUyOCwxMTMuMTA5aC0wLjIxM2MtNS44ODgsMC0xMC41Niw0Ljc3OS0xMC41NiwxMC42NjdzNC44ODUsMTAuNjY3LDEwLjc3MywxMC42NjdzMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjcgICAgIFM4NC40MTYsMTEzLjEwOSw3OC41MjgsMTEzLjEwOXoiIGZpbGw9IiM5MURDNUEiLz4KCQkJPHBhdGggZD0iTTQ5MC42NjcsMjEzLjMzM2gtMTcuMTMxbDI3LjM0OS05Mi45OTJjMS41NTctNS4yNDgtMS4xMzEtMTAuODE2LTYuMTg3LTEyLjg4NWMtNS4wNzctMi4wMjctMTAuODU5LDAuMDIxLTEzLjQ0LDQuODQzICAgICBDNDc3LjE0MSwxMjAuMDIxLDQ1OS41NjMsMTI4LDQzNy4zMzMsMTI4Yy0yNC40MjcsMC00Mi42NjctMTEuMjY0LTQyLjY2Ny0yMS4zMzN2LTY0QzM5NC42NjcsMTkuMTM2LDM3NS41MzEsMCwzNTIsMCAgICAgYy0yMy41MzEsMC00Mi42NjcsMTkuMTM2LTQyLjY2Nyw0Mi42Njd2MTAuNjY3QzMwOS4zMzMsNTkuMjIxLDMxNC4xMTIsNjQsMzIwLDY0czEwLjY2Ny00Ljc3OSwxMC42NjctMTAuNjY3VjQyLjY2NyAgICAgYzAtMTEuNzU1LDkuNTc5LTIxLjMzMywyMS4zMzMtMjEuMzMzczIxLjMzMyw5LjU3OSwyMS4zMzMsMjEuMzMzdjY0YzAsMTAuMDY5LTE4LjI0LDIxLjMzMy00Mi42NjcsMjEuMzMzICAgICBjLTIyLjIyOSwwLTM5LjgwOC03Ljk3OS00My45NDctMTUuNzAxYy0yLjU2LTQuODIxLTguNDI3LTYuODI3LTEzLjQ0LTQuODQzYy01LjA1NiwyLjA2OS03Ljc0NCw3LjYzNy02LjE4NywxMi44ODUgICAgIGwyNy4zNDksOTIuOTkyaC0zNS42NjlMMTkwLjQ4NSw2MS41MjVjLTMuNTItNy43ODctOS44MzUtMTMuNzYtMTcuODM1LTE2Ljc4OWMtOC0zLjAyOS0xNi42ODMtMi43NTItMjQuNDY5LDAuNzQ3TDUwLjg4LDg5LjIzNyAgICAgYy0xNi4wNjQsNy4yMzItMjMuMjc1LDI2LjIxOS0xNi4wNDMsNDIuMzA0bDM2Ljc3OSw4MS43OTJIMjEuMzMzYy01Ljg4OCwwLTEwLjY2Nyw0Ljc3OS0xMC42NjcsMTAuNjY3djE5MiAgICAgYzAsNTIuOTI4LDQzLjA3Miw5Niw5Niw5NmgyOTguNjY3YzUyLjkyOCwwLDk2LTQzLjA3Miw5Ni05NlYyMjRDNTAxLjMzMywyMTguMTEyLDQ5Ni41NTUsMjEzLjMzMyw0OTAuNjY3LDIxMy4zMzN6ICAgICAgTTM5NC42NjcsMTM4LjYyNGMxMS4yNDMsNi42NTYsMjYuMTEyLDEwLjcwOSw0Mi42NjcsMTAuNzA5YzExLjI2NCwwLDIzLjU1Mi0xLjgzNSwzNC40OTYtNS42OTZsLTIwLjUwMSw2OS42OTZoLTU2LjY2MVYxMzguNjI0ICAgICB6IE0zMzAuNjY3LDE0OS4zMzNjMTYuNTU1LDAsMzEuNDI0LTQuMDUzLDQyLjY2Ny0xMC43MDl2NzQuNzA5aC01Ni42NGwtMjAuNTAxLTY5LjY5NiAgICAgQzMwNy4xMTUsMTQ3LjQ5OSwzMTkuNDAzLDE0OS4zMzMsMzMwLjY2NywxNDkuMzMzeiBNNTQuMjkzLDEyMi44MTZjLTIuNDMyLTUuMzU1LTAuMDIxLTExLjY5MSw1LjMzMy0xNC4xMDFsOTcuMzAxLTQzLjc1NSAgICAgYzIuNjAzLTEuMTczLDUuNTA0LTEuMjU5LDguMTQ5LTAuMjU2YzIuNjQ1LDEuMDAzLDQuNzU3LDIuOTg3LDUuOTMxLDUuNTg5bDY0LjM0MSwxNDMuMDRIOTQuOTk3TDU0LjI5MywxMjIuODE2eiBNNDgwLDQxNiAgICAgYzAsNDEuMTczLTMzLjQ5Myw3NC42NjctNzQuNjY3LDc0LjY2N0gxMDYuNjY3QzY1LjQ5Myw0OTAuNjY3LDMyLDQ1Ny4xNzMsMzIsNDE2VjIzNC42NjdoNDQ4VjQxNnoiIGZpbGw9IiM5MURDNUEiLz4KCQkJPHBhdGggZD0iTTIxMi42MDgsMzM2LjEyOGM2LjIwOCwwLjM2MywxMC45NjUtNC4wMzIsMTEuMzcxLTkuOTJjMS4wNDUtMTUuNDQ1LDE1LjEwNC0yNy41MiwzMi0yNy41MiAgICAgYzE3LjY2NCwwLDMyLjAyMSwxMy4xNjMsMzIuMDIxLDI5LjMzM2MwLDE5LjA5My0xNi4yOTksMjUuNDI5LTMyLjI1NiwyOS4wOTlsLTIuMzY4LDAuNTc2Yy00LjcxNSwxLjE5NS04LDUuNDQtOCwxMC4zMDQgICAgIGwtMC4wMjEsMjYuNjY3YzAsNS44NjcsNC43NTcsMTAuNjY3LDEwLjY2NywxMC42NjdjNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY0NWwwLjAyMS0xOC4zNjggICAgIGMyOC4zMDktOC4xMDcsNDIuNjQ1LTI0LjM0MSw0Mi42NDUtNDguMzJjMC0yNy45NDctMjMuOTM2LTUwLjY2Ny01My4zNTUtNTAuNjY3Yy0yOC4wNzUsMC01MS40OTksMjAuODIxLTUzLjMxMiw0Ny40MjQgICAgIEMyMDIuMjgzLDMzMC42NDUsMjA2Ljc0MSwzMzUuNzIzLDIxMi42MDgsMzM2LjEyOHoiIGZpbGw9IiM5MURDNUEiLz4KCQkJPHBhdGggZD0iTTI0OC41MzMsNDI5Ljg2N2MtMi4xMzMsMS45Mi0zLjIsNC42OTMtMy4yLDcuNDY3YzAsMi43NzMsMS4wNjcsNS41NDcsMy4yLDcuNDY3YzEuOTIsMi4xMzMsNC42OTMsMy4yLDcuNDY3LDMuMiAgICAgYzIuNzczLDAsNS41NDctMS4wNjcsNy40NjctMy4yYzIuMTMzLTEuOTIsMy4yLTQuNjkzLDMuMi03LjQ2N2MwLTIuNzczLTEuMDY3LTUuNTQ3LTMuMi03LjQ2NyAgICAgQzI1OS40MTMsNDI1LjgxMywyNTIuNTg3LDQyNS44MTMsMjQ4LjUzMyw0MjkuODY3eiIgZmlsbD0iIzkxREM1QSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K`;
export const GIT_REPO_URL = `https://github.com/afzaalb/watch-mo/`;
export const GTAG_KEY = process.env.GTAG_KEY;

// Object Constants
export const youTubeConfig = {
  playerVars: {
    enablejsapi: 1,
    showinfo: 0,
    controls: 1,
    autoplay: 1,
    rel: 0,
  },
};

export const mediaTypes = {
  TV: "tv",
  MOVIE: "movie",
  PERSON: "person",
};

export const filterTypes = {
  TV: mediaTypes.TV,
  MOVIE: mediaTypes.MOVIE,
  PERSON: mediaTypes.PERSON,
};

export const themes = {
  LITE: "wm-lite",
  // DARK: "wm-dark",
  TEA_PINK: "wm-tea-pink",
};

// Image Sizes are just for reference but are not being used anywhere
export const imageSizes = {
  backdrop_sizes: ["w300", "w780", "w1280", "original"],
  logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  profile_sizes: ["w45", "w185", "h632", "original"],
  still_sizes: ["w92", "w185", "w300", "original"],
};

export const videoTypes = {
  TRAILER: "Trailer",
  TEASER: "Teaser",
};

export const crewTypes = {
  WRITER: "Writer",
  DIRECTOR: "Director",
  PRODUCER: "Producer",
};

export const movieCategories = {
  nowPlaying: "Now Playing",
  upcoming: "Upcoming",
  popular: "Popular",
  topRated: "Top Rated",
};

export const tvCategories = {
  airingToday: "Airing Today",
  onAir: "On Air",
  popular: "Popular",
  topRated: "Top Rated",
};

export const defaultSettings = { adult: false };
