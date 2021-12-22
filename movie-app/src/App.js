import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GetMovies from "./components/GetMovies";
import SearchMovies from "./components/SearchMovies";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  return (
    <div className="App">
      <SearchAppBar />
      <Router>
        <Routes>
          <Route exact path="/search" element={<SearchMovies />}></Route>

          <Route exact path="/" element={<GetMovies />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
