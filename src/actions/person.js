import * as ACTIONS from './action-types';

export function dataFetch (fetchedData) {
  return dispatch => {
    dispatch({
      type: ACTIONS.PERSON_DATA_FETCH,
      payload: fetchedData
    });
  };
}

export function setSortBy (sortBy) {
  return {
    type: ACTIONS.PERSON_SORT_BY_OPTION_CHANGED,
    payload: sortBy
  };
}

export function sortPeoples (sortBy) {
  return {
    type: ACTIONS.PERSON_SORT,
    payload: sortBy
  };
}
