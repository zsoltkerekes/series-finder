import * as ACTIONS from './../actions/action-types';

const initial = {
  sortBy: 'rating',
  persons: []
};

export const personReducer = (state = initial, action) => {
  let persons;
  let cleanedPersonData;
  switch (action.type) {
  case ACTIONS.PERSON_SORT_BY_OPTION_CHANGED:
    state = {
      ...state,
      sortBy: action.payload
    };
    return state;

  case ACTIONS.PERSON_DATA_FETCH:
    cleanedPersonData = action.payload.map(person => {
      person.person.name = person.person.name.replace(/[^a-zA-Z0-9 ,!']/g, '');
      person.person.birthday = person.person.birthday ? person.person.birthday : '0000';
      return person;
    });
    state = {
      ...state,
      persons: cleanedPersonData
    };
    return state;

  case ACTIONS.PERSON_SORT:

    if (state.sortBy === 'date') {
      persons = state.persons.sort((a, b) => {
        if (Date.parse(a.person.birthday) < Date.parse(b.person.birthday)) {
          return 1;
        }
        if (Date.parse(a.person.birthday) > Date.parse(b.person.birthday)) {
          return -1;
        }
        return 0;
      });
    }

    if (state.sortBy === 'rating') {
      persons = state.persons.sort((a, b) => {
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
      persons: persons
    };

    return state;

  default:
    return state;
  }
};
