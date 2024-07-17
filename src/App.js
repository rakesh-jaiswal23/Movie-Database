import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import './index.css';

const App = () => {

  useEffect(function(){
    alert("Api image have some problem 😥")
  },[])
  
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async (searchQuery) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://dummyapi.online/api/movies?search=${searchQuery}`);
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      setError('Failed to fetch movies');
    }
    setIsLoading(false);
  };

  return (
    <div className="app">
      <NavBar query={query} setQuery={setQuery} onSearch={fetchMovies} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="content">
        {!selectedMovie && <MovieList movies={movies} onSelectMovie={setSelectedMovie} />}
        {selectedMovie && <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />}
      </div>
    </div>
  );
};

export default App;
