import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MediaCard from "./MediaCard";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

import { Grid, Box, Button } from "@mui/material";

const SearchMovies = (value) => {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearching(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMessage(null);
      setMovies(data.results);
      setSearching(false);
    } catch (err) {
      setMessage("An unexpected error occured.");
      setSearching(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(" Search Movies", movies);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} marginLeft={5}>
        <Grid container>
          <TextField
            id="filled-search"
            label="Search movies"
            type="search"
            variant="filled"
            color="primary"
            onChange={handleChange}
          />

          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={searchMovies}
          >
            Search
          </Button>
        </Grid>
      </Box>

      {searching ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }} marginLeft={5}>
          <Grid container>
            {movies.map((movie, id) => (
              <MediaCard key={id} movie={movie} />
            ))}
          </Grid>
        </Box>
      )}

      {message && <h2>{message}</h2>}
    </div>
  );
};

export default SearchMovies;
