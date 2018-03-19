import React from 'react';
import './SearchPage.css';
import SearchMovie from './../../components/SearchMovie/SearchMovie';
import SearchResult from './../../components/SearchResult/SearchResult';

export const SearchPage = (props) => {
  document.title = 'Series Finder';
  return (
    <div className="Search">
      <SearchMovie />
      <SearchResult {...props}/>
    </div>
  );
};
