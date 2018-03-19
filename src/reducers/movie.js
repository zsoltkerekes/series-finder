import * as ACTIONS from './../actions/action-types';

const initial = {
  sortBy: 'rating',
  movies: []
};

export const movieReducer = (state = initial, action) => {
  let movies;
  let cleanedMovieData;
  switch (action.type) {
  case ACTIONS.MOVIE_SORT_BY_OPTION_CHANGED:
    state = {
      ...state,
      sortBy: action.payload
    };
    return state;

  case ACTIONS.MOVIE_DATA_FETCH:
    cleanedMovieData = action.payload.map(movie => {
      movie.show.name = movie.show.name.replace(/[^a-zA-Z0-9 ,!']/g, '');
      movie.show.premiered = movie.show.premiered ? movie.show.premiered : '0000';
      return movie;
    });
    state = {
      ...state,
      movies: cleanedMovieData
    };
    return state;

  case ACTIONS.MOVIE_SORT:
    if (state.sortBy === 'date') {
      movies = state.movies.sort((a, b) => {
        if (Date.parse(a.show.premiered) < Date.parse(b.show.premiered)) {
          return 1;
        }
        if (Date.parse(a.show.premiered) > Date.parse(b.show.premiered)) {
          return -1;
        }
        return 0;
      });
    }

    if (state.sortBy === 'rating') {
      movies = state.movies.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
    }

    state = {
      ...state,
      movies: movies
    };

    return state;

  default:
    return state;
  }
};
