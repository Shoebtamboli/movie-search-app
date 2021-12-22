import React, { useState, useEffect } from "react";
import "../App.css";
import MediaCard from "./MediaCard";
import { Grid, Box } from "@mui/material";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const json = await response.json();
        setMovies(json.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  console.log("Movies", movies);
  return (
    <Box sx={{ flexGrow: 1 }} marginLeft={5} marginTop={5} marginBottom={5}>
      <Grid container>
        {movies.map((movie, index) => (
          <MediaCard key={index} movie={movie} />
        ))}
      </Grid>
    </Box>
  );
};

export default GetMovies;
