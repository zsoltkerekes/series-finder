import React from 'react';
import { Link } from 'react-router-dom';
import './PersonDetails.css';
import noPic from './../../assets/images/no.png';

export const PersonDetails = ({ person }) => {
  if (person !== undefined) {
    document.title = person.person.name + ' | ' + document.title;
    document.documentElement.scrollTop = 0;
    return (
      <div className="PersonDetails">

        <Link to="/home">
          <input type="button" value="SEARCH" className="button"/>
          <h1>TvMaze Shows</h1>
        </Link>

        <div className="movie">
          <img
            src = {person.person.image ? person.person.image.original : noPic}
            alt={person.person.name ? person.person.name : '(No name)'}
            title={person.person.name ? person.person.name : '(No name)'}/>
          <h2>
            {person.person.name ? person.person.name : '(No name)'}
            <span className="imdb">
              {person.score ? Math.round(person.score) : '(No score)'}
            </span>
          </h2>
          <p className="year">
            {person.person.birthday !== '0000' ? person.person.birthday : '(no birthday)'}
          </p>
          <p className="genre">
            {person.person.gender ? person.person.gender : '(no gender)'}
          </p>
          <div className="plot"/>
          {person.person.deathday ? person.person.deathday : '(no day of death)'}
        </div>
        <br/>
        <a href={person.person.url ? person.person.url : ''}
          target="_blank">{person.person.url ? person.person.url : ''}</a>
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
