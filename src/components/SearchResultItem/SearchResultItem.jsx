import React from 'react';
import './SearchResultItem.css';
import noPic from './../../assets/images/no.png';


export const SearchResultItem = ({ movie, person }) => {
  if (movie) {
    return (
      <div className="item">
        <img
          src={movie.show.image ? movie.show.image.medium : noPic}
          alt={movie.show.name ? movie.show.name : '(No name)'}
          title={movie.show.name ? movie.show.name : '(No name)'}/>
        <h2>
          <span>
            {movie.show.name ? movie.show.name : '(No name)'}
          </span>
          <span>
            {movie.show.premiered !== '0000' ? `(${movie.show.premiered.slice(0, 4)})` : '(No date)'}
          </span>
        </h2>
        <p>
          <span>
          Score: {movie.score ? Math.round(movie.score) : '(No score)'}
          </span>
          <span>
            {movie.show.genres.length !== 0 ? movie.show.genres.slice(0, 2).join() : '(No genres)'}
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="item">
        <img
          src={person.person.image ? person.person.image.medium : noPic}
          alt={person.person.name ? person.person.name : '(No name)'}
          title={person.person.name ? person.person.name : '(No name)'}/>
        <h2>
          <span>
            {person.person.name ? person.person.name : '(No name)'}
          </span>
          <span>
            {person.person.birthday !== '0000' ? person.person.birthday : '(no birthday)'}
          </span>
        </h2>
        <p>
          <span>
          Score: {person.score ? Math.round(person.score) : '(No score)'}
          </span>
          <span>
            {person.person.gender ? person.person.gender : '(No gender)'}
          </span>
        </p>
      </div>
    );
  }
};

