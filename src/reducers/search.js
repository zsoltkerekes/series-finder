import * as ACTIONS from './../actions/action-types';

const initial = {
  searchBy: 'title',
  searchPhrase: '',
  isFromSubmitted: false
};

export const searchReducer = (state = initial, action) => {
  switch (action.type) {
  case ACTIONS.SEARCH_FIELD_CHANGED:
    state = {
      ...state,
      searchPhrase: action.payload
    };
    return state;

  case ACTIONS.SEARCH_BY_OPTION_CHANGED:
    state = {
      ...state,
      searchBy: action.payload
    };
    return state;

  case ACTIONS.SEARCH_IS_FROM_SUBMITTED:
    state = {
      ...state,
      isFromSubmitted: action.payload
    };
    return state;


  default:
    return state;
  }
};
