import * as ACTIONS from './action-types';

export function setSearchPhrase (phrase) {
  return {
    type: ACTIONS.SEARCH_FIELD_CHANGED,
    payload: phrase
  };
}

export function setSearchBy (phrase) {
  return {
    type: ACTIONS.SEARCH_BY_OPTION_CHANGED,
    payload: phrase
  };
}

export function setIsFromSubmitted (submitted) {
  return {
    type: ACTIONS.SEARCH_IS_FROM_SUBMITTED,
    payload: submitted
  };
}
