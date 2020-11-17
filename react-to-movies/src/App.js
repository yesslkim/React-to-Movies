import React, {useEffect, useState} from 'react';
import Movie from './components/movie';
const MOVIE_API = 'https://yts.mx/api/v2/list_movies.json';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch(MOVIE_API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.data.movies);
    });
  },[])
  return (
    <>
    <header className="title">
      <h1>~ React to Movies ~</h1>
    </header>
    <div className="movie-container">
      {movies.map(movie => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
    </>
  )
}

export default App;
