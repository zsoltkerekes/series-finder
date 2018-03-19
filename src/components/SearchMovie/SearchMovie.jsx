import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SearchMovie.css';
import { connect } from 'react-redux';
import * as movieActions from './../../actions/movie';
import * as searchActions from './../../actions/search';
import * as personActions from './../../actions/person';
import PropTypes from 'prop-types';

export class SearchMovie extends Component {
  componentDidUpdate () {
    if (this.props.searchReducer.isFromSubmitted) {
      this.props.setIsFromSubmitted(false);
      this.props.fetchData(
        this.props.searchReducer.searchPhrase.toLowerCase(),
        this.props.movieReducer.sortBy,
        this.props.searchReducer.searchBy
      );
    }
  }

  render () {
    if (this.props.searchReducer.isFromSubmitted) {
      return <Redirect to={`/search/${this.props.searchReducer.searchPhrase}`}/>;
    } else {
      return (
        <div className="SearchMovie">
          <Link to={'/home'}>
            <h1>Series Finder</h1>
          </Link>

          <input type="search" name="search" id="search" required="required"
            value={this.props.searchReducer.searchPhrase}
            onKeyPress={(event) => { if (event.key === 'Enter') {this.props.setIsFromSubmitted(true);} }}
            onChange={event => {this.props.setSearchPhrase(event.target.value);}}/>

          <span>SEARCH BY</span>

          <input type="button" value="SERIES" id="title"
            className={(this.props.searchReducer.searchBy === 'title') ? 'selected' : ''}
            onClick={(event) => {this.props.setSearchBy(event.target.id);}}/>

          <input type="button" value="PERSON" id="person"
            className={(this.props.searchReducer.searchBy === 'person') ? 'selected' : ''}
            onClick={(event) => {this.props.setSearchBy(event.target.id);}}/>

          <input type="submit" value="SEARCH" id="submit"
            onClick={() => {this.props.setIsFromSubmitted(true);}}/>

        </div>
      );
    }
  }
}

export const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer,
    searchReducer: state.searchReducer,
    personReducer: state.personReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setSearchPhrase: (text) => {
      dispatch(searchActions.setSearchPhrase(text));
    },
    setSearchBy: (text) => {
      dispatch(searchActions.setSearchBy(text));
    },
    setIsFromSubmitted: (boolean) => {
      dispatch(searchActions.setIsFromSubmitted(boolean));
    },
    fetchData: (searchPhrase, sortBy, searchBy) => {
      const moviesUrl = 'https://api.tvmaze.com/search/shows';
      const peoplesUrl = 'https://api.tvmaze.com/search/people';

      let url = (searchBy === '' || searchBy === 'title') ? moviesUrl : peoplesUrl;

      fetch(`${url}?q=${searchPhrase}`)
        .then(
          response => response.json()//,
          //error => console.error(error)
        ).then(
          responseArray => {
            if (searchBy === '' || searchBy === 'title') {
              dispatch(movieActions.dataFetch(responseArray));
              dispatch(movieActions.sortMovies(sortBy));
            } else {
              dispatch(personActions.dataFetch(responseArray));
              dispatch(personActions.setSortBy(sortBy));
            }
          }//,
          //error => console.error(error)
        );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);

SearchMovie.propTypes = {
  searchReducer: PropTypes.object.isRequired,
  movieReducer: PropTypes.object.isRequired,
  setIsFromSubmitted: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  setSearchPhrase: PropTypes.func.isRequired,
  setSearchBy: PropTypes.func.isRequired
};
