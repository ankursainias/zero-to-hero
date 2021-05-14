import { Link } from "react-router-dom";
 import "./UI/movies.css";

const MoviesContainer = (props) => {
  const results = props.movies.map((movie, i) => {
    return (
      <div className="movie-card" key={movie.id}>
        <div className="movie-content">
          <div className="movie-content-header">
            <Link to={`/movies/${movie.id}`}>
              <h3 className="movie-title">{movie.title}</h3>
            </Link>
            <div className="imax-logo"></div>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Date</label>
              <span>{movie.release_date}</span>
            </div>
            <div className="info-section">
              <label>Screen</label>
              <span>03</span>
            </div>
            <div className="info-section">
              <label>Row</label>
              <span>F</span>
            </div>
            <div className="info-section">
              <label>Seat</label>
              <span>21,22</span>
            </div>
          </div>
        </div>
      </div>
    );
  })
  return results
};

export default MoviesContainer;
