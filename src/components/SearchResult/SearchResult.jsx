import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';
import { connect } from 'react-redux';
import * as movieActions from './../../actions/movie';
import * as personActions from './../../actions/person';
import { SearchResultItem } from './../SearchResultItem/SearchResultItem';
import PropTypes from 'prop-types';

class SearchResult extends Component {
  render () {
    if (this.props.movieReducer.movies.length > 0 || this.props.personReducer.persons.length > 0) {
      if (this.props.searchReducer.searchBy === 'title' || this.props.searchReducer.searchBy === '') {
        return (
          <div className="SearchResult">
            <div className="results">
              <p>
                {`${this.props.movieReducer.movies.length} shows found`}
              </p>
              <p>
          Sort By
                <span id="date"
                  onClick={(event) => this.props.setMoviesSortBy(event.target.id)}
                  className={(this.props.movieReducer.sortBy === 'date') ? 'sortSelected' : ''}> release date
                </span>
                <span id="rating"
                  onClick={(event) => this.props.setMoviesSortBy(event.target.id)}
                  className={(this.props.movieReducer.sortBy === 'rating') ? 'sortSelected' : ''}> rating
                </span>
              </p>
            </div>

            {
              this.props.movieReducer.movies
                .map((movie, i) => (<Link to={'/movie/' + movie.show.name} key={i}>
                  <SearchResultItem movie={movie}/>
                </Link>))
            }
          </div>
        );
      } else {
        return (
          <div className="SearchResult">
            <div className="results">
              <p>
                {`${this.props.personReducer.persons.length} person found`}
              </p>
              <p>
            Sort By
                <span id="date"
                  onClick={(event) => this.props.setPeoplesSortBy(event.target.id)}
                  className={(this.props.personReducer.sortBy === 'date') ? 'sortSelected' : ''}> birthday
                </span>
                <span id="rating"
                  onClick={(event) => this.props.setPeoplesSortBy(event.target.id)}
                  className={(this.props.personReducer.sortBy === 'rating') ? 'sortSelected' : ''}> rating
                </span>
              </p>
            </div>

            {
              this.props.personReducer.persons
                .map((person, i) => (<Link to={'/person/' + person.person.name} key={i}>
                  <SearchResultItem person={person}/>
                </Link>))
            }
          </div>
        );
      }
    } else {
      return (
        <p>
          Close but no cigar..
        </p>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer,
    personReducer: state.personReducer,
    searchReducer: state.searchReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setMoviesSortBy: (sortBy) => {
      dispatch(movieActions.setSortBy(sortBy));
      dispatch(movieActions.sortMovies(sortBy));
    },
    setPeoplesSortBy: (sortBy) => {
      dispatch(personActions.setSortBy(sortBy));
      dispatch(personActions.sortPeoples(sortBy));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

SearchResult.propTypes = {
  searchReducer: PropTypes.object.isRequired,
  movieReducer: PropTypes.object.isRequired,
  personReducer: PropTypes.object.isRequired,
  setMoviesSortBy: PropTypes.func.isRequired,
  setPeoplesSortBy: PropTypes.func.isRequired
};
