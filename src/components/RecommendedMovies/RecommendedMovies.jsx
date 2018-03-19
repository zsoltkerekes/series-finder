import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendedMovies.css';
import { SearchResultItem } from './../SearchResultItem/SearchResultItem';
import PropTypes from 'prop-types';

export const RecommendedMovies = (props) => {
  return (
    <div className="RecommendedMovies">
      <h3>Recommended Shows:</h3>

      {props.movieReducer.movies
        .filter(row => row.show.name !== props.match.params.movieName)
        .slice(0, 4).map((movie, i) =>
          (<Link to={'/movie/' + movie.show.name} key={i}>
            <SearchResultItem movie={movie}/>
          </Link>))}

    </div>
  );
};

RecommendedMovies.propTypes = {
  movieReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
