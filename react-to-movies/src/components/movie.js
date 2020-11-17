import React from 'react';

const Movie = ({large_cover_image,genres,summary, title }) => {
  return (
  <div className="movie">
    <img src={large_cover_image} alt={title}/>
      <h3>{title}</h3>
      <span>{genres}</span>
      <p>
        Summary: 
        {summary}
      </p>
  </div>
  )
}

export default Movie;