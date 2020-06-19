# Watch-Mo

Simple React App using TMDB api for movies, tv shows and people.
Torrents for movies are also supported in `v1.1.0` and above.
Have a look at the web app [here](https://watchmo.netlify.app/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To get started with this project, you need to get an api key from TMDB. Get it [here](https://www.themoviedb.org/settings/api).

### Installing

Get a copy of the project by clicking Clone or Download button.

Install node modules.

```
npm install
```

Create a `.env` file in root directory and add `TMDB_KEY: KEY_YOU_GOT_FROM_TMDB`. You can also modify your api configuration parameters in `src/constants/index`.

Start your application. This command will also watch for changes in your files.

```
npm start
```

For api options and methods details:
[Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

## Built With

- [React](https://reactjs.org/) - A JS library for UI
- [TMDB](https://www.themoviedb.org/documentation/api) - API
- [Bootstrap](http://getbootstrap.com/) - CSS Framework

## Authors

- **Muhammad Afzaal**
  - [Github](https://github.com/afzaalb)
  - [Twitter](https://twitter.com/afzaalopera?lang=en)
