import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = (props) => {
  return (
     <tr>
       <td className="text-left">{props.movie.Title}</td>
       <td className="text-left">{props.movie.Year}</td>
     </tr>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieListItem;
