// Dependencies
import React, { Component } from 'react';
import MoviesList from '../movies-list/MoviesList.jsx';

// Styles
import './Content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
        movies: []
    };

    this.videoSearch('star+wars');
  }

  videoSearch(term){
      fetch(`http://www.omdbapi.com/?s=${term}&page=1`)
      .then(response => {
          return response.json();
      })
      .then(movies => {
          this.setState({ movies: movies.Search })
      });
  }

  render() {
    return (
        <div>
            <MoviesList movies={this.state.movies}/>
        </div>
    );
  }
}

export default Content;
