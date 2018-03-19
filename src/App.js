import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';

import { HomePage } from './containers/HomePage/HomePage';
import { SearchPage } from './containers/SearchPage/SearchPage';
import MoviePage from './containers/MoviePage/MoviePage';
import PersonPage from './containers/PersonPage/PersonPage';
import { Footer } from './components/Footer/Footer';

class App extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <section className="container">
            <Route path="/search/:movieName" exact component={SearchPage}/>
            <Route path="/movie/:movieName" exact component={MoviePage}/>
            <Route path="/person/:personName" exact component={PersonPage}/>
            <Route path="/home" exact component={HomePage}/>
            <Route path="/"exact component={HomePage}/>
          </section>
        </HashRouter>
        <div className="container">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
