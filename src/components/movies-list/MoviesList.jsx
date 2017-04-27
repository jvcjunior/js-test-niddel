import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../movies-list-item/MovieListItem.jsx';

const MoviesList = (props) => {
  const videoItems = props.movies.map((movie) => {
    return (
      <MovieListItem movie={movie} />

    );
  });
  return (
    <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left">Title</th>
          <th className="text-left">Year</th>
        </tr>
      </thead>
      <tbody className="table-hover">
        {videoItems}
      </tbody>
    </table>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;