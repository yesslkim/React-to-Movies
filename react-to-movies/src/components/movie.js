import React from 'react';

const Movie = ({large_cover_image, summary, title }) => {
  return (
  <div>
    <img src={large_cover_image} alt={title}/>
    <div className="movie-info">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  </div>
  )
}

export default Movie;