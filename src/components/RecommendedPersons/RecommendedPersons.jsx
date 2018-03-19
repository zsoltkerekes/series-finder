import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendedPersons.css';
import { SearchResultItem } from './../SearchResultItem/SearchResultItem';
import PropTypes from 'prop-types';

export const RecommendedPersons = (props) => {
  return (
    <div className="RecommendedPersons">
      <h3>Recommended Persons:</h3>

      {props.personReducer.persons
        .filter(row => row.person.name !== props.match.params.personName)
        .slice(0, 4).map((person, i) =>
          (<Link to={'/person/' + person.person.name} key={i}>
            <SearchResultItem person={person}/>
          </Link>))}

    </div>
  );
};

RecommendedPersons.propTypes = {
  personReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
