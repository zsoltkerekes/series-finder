import * as ACTIONS from './action-types';

export function dataFetch (fetchedData) {
  return dispatch => {
    dispatch({
      type: ACTIONS.MOVIE_DATA_FETCH,
      payload: fetchedData
    });
  };
}

export function setSortBy (sortBy) {
  return {
    type: ACTIONS.MOVIE_SORT_BY_OPTION_CHANGED,
    payload: sortBy
  };
}

export function sortMovies (sortBy) {
  return {
    type: ACTIONS.MOVIE_SORT,
    payload: sortBy
  };
}
