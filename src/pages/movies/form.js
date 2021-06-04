import Input from "../../components/UI/Input";
import React, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";

const NewMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const params = useParams();

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    if (params.id.length > 0) {
      setTitle("War");
      setReleaseDate(new Date().toISOString().substring(0, 10));
    }
  }, [title, setReleaseDate, params.id]);

  const nameHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const submitMovie = async (movie) => {
    if (error) {
      NotificationManager.error(error);
    } else {
      NotificationManager.success("Movie added successfully");
      setTitle("");
      setReleaseDate("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.length && releaseDate.length) {
      submitMovie(
        {
          url: "https://react-http-24d3c-default-rtdb.firebaseio.com/movies.json",
          method: "POST",
          body: JSON.stringify({ title: title, release_date: releaseDate }),
          headers: { "Content-Type": "application/json" },
        },
        sendRequest
      );
    } else {
      NotificationManager.error("All fields required!");
    }
  };

  return (
    <div className="col-sm-6">
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={nameHandler}
          className="form-group"
        />
        <Input
          type="date"
          placeholder="Movie Release Date"
          value={releaseDate}
          onChange={dateHandler}
          className="form-group"
        />
        <br />
        <div className="btn-group">
          <button
            type="submit"
            className={`btn btn-secondary ${isLoading ? "disabled" : ""}`}
          >
            {isLoading
              ? "Submiting..."
              : params.id
              ? "Edit Movie"
              : "Add Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMovie;
