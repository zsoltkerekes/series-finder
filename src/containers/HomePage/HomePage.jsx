import React from 'react';
import './HomePage.css';
import SearchMovie from './../../components/SearchMovie/SearchMovie';

export const HomePage = () => {
  document.title = 'Series Finder';
  return (
    <div className="Home">
      <SearchMovie/>
      <div className="noFilm">
        <p>No Movies/Persons Found</p>
      </div>
    </div>
  );
};
