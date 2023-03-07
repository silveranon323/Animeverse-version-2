import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "http://www.omdbapi.com/?apikey=64101336";
  const movie = {
    Title: "Spiderman",
    Year: "2010",
    imdbID: "tt1785572",
    Type: "movie",
    Poster: "N/A",
  };
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("attack on titan");
  }, []);
  return (
    <>
      <div className="app">
        <h1>Anime Verse</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Anime"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)
            }
            onKeyDown = {() => searchMovies(searchTerm)}
          />
          <img
            src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
      <footer style={{color:"white" , textAlign:"center"}}>
        copyright2023 by SilverAnon
      </footer>
    </>
  );
}
