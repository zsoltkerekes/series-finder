import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';
import noPic from './../../assets/images/no.png';

export const MovieDetails = ({ movie }) => {
  if (movie !== undefined) {
    document.title = movie.show.name + ' | ' + document.title;
    document.documentElement.scrollTop = 0;

    return (
      <div className="MovieDetails">

        <Link to="/home">
          <input type="button" value="SEARCH" className="button"/>
          <h1>Series Finder</h1>
        </Link>

        <div className="movie">
          <img
            src={movie.show.image ? movie.show.image.original : noPic}
            alt={movie.show.name ? movie.show.name : '(No name)'}
            title={movie.show.name ? movie.show.name : '(No name)'}/>
          <h2>
            {movie.show.name ? movie.show.name : '(No name)'}
            {movie.show.status ? ` (${movie.show.status})` : ''}
            <span className="imdb">
              {movie.score ? Math.round(movie.score) : '(No score)'}
            </span>
          </h2>
          <p className="year">
            {movie.show.premiered !== '0000' ? movie.show.premiered : '(no premier year)'}
          </p>
          <p className="genre">
            {movie.show.genres.length !== 0 ? movie.show.genres.join() : '(no genres)'}
          </p>
          <div className="plot"
            dangerouslySetInnerHTML={{ __html: `${movie.show.summary ? movie.show.summary : '(no summary)' }` }} />
        </div>
        <a href={movie.show.url ? movie.show.url : ''}
          target="_blank">{movie.show.url ? movie.show.url : ''}</a>
        <br/>
      </div>
    );
  } else {
    return (
      <p>
        Close but no cigar..
      </p>
    );
  }
};
