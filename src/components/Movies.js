import React, { useState, useEffect, useCallback } from "react";

import { Link } from 'react-router-dom'

import MoviesContainer from './MoviesContainer'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {

      const response = await fetch("https://react-http-24d3c-default-rtdb.firebaseio.com/movies.json")
      if (!response.ok) throw Error('Something went wrong !')
  
      const data = await response.json()

      const transformMovies = []

      for( const key in data) {
        transformMovies.push({
          id: key,
          title: data[key].title,
          release_date: data[key].release_date
        })
      }
  
      setMovies(() => transformMovies);
   
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])
  
  let content = <p>No Movies Found</p>
  if (isLoading) content = <p>Loading...</p>
  if(error) content = <p>{error}</p>
  return  (
          <>
            <div className='container'>
              <Link to='/movies/new' className="btn btn-secondary" >Add New Movie </Link>
            </div>
            <div className="container">

              { isLoading ? content : (movies.length > 0 && !error ? <MoviesContainer movies = {movies} /> : content ) }
            </div>
          </>)
};

export default Movies;
