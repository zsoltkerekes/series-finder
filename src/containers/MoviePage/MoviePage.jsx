import React, { Component } from 'react';
import './MoviePage.css';
import { MovieDetails } from './../../components/MovieDetails/MovieDetails';
import { RecommendedMovies } from './../../components/RecommendedMovies/RecommendedMovies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MoviePage extends Component {
  movie = () => this.props.movieReducer.movies.find(row => row.show.name === this.props.match.params.movieName)

  render () {
    return (
      <div className="Movie">
        <MovieDetails movie={this.movie()}/>
        <RecommendedMovies {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer
  };
};

export default connect(mapStateToProps, null)(MoviePage);

MoviePage.propTypes = {
  movieReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
