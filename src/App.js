import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import "./App.css";

// Components
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <BrowserRouter BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
