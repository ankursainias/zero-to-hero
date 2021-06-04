import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import MoviesContainer from './MoviesContainer';

import useHttp from '../hooks/use-http';

const Movies = () => {
	const [movies, setMovies] = useState([]);

	const { isLoading, error, sendRequest: fetchMovies } = useHttp();

	useEffect(() => {
		const transformObject = (data) => {
			const transformMovies = [];

			for (const key in data) {
				transformMovies.push({
					id: key,
					title: data[key].title,
					release_date: data[key].release_date
				});
			}
			setMovies(() => transformMovies);
		};

		fetchMovies({ url: 'https://react-http-24d3c-default-rtdb.firebaseio.com/movies.json' }, transformObject);
	}, [fetchMovies]);

	let content = <p>No Movies Found</p>;
	if (isLoading) content = <p>Loading...</p>;
	if (error) content = <p>{error}</p>;
	return (
		<>
			<div className="container">
				<Link to="/movies/new" className="btn btn-secondary">
					Add New Movie{' '}
				</Link>
			</div>
			<div className="container">
				{isLoading ? content : movies.length > 0 && !error ? <MoviesContainer movies={movies} /> : content}
			</div>
		</>
	);
};

export default Movies;
