import React from "react";
import { Link } from 'react-router-dom';

const Thumb = ({ image, movieId, title, ratings, releaseDate, clickable }) => {

  const bgColor = function (ratings) {
    if (Number(ratings) <= 3) return "#dc2626";
    if (Number(ratings) <= 7) return "#fbbf24";
    if (Number(ratings) <= 10) return "#16a34a";
  }
  const style = {
    backgroundColor: bgColor(ratings)
  }

  return (
    <div className="relative shadow-2xl w-max">
      <Link to={`/${movieId}`}>
        <img src={image} alt="movie-thumb" className="lg:h-72 sm:h-64 h-80 rounded-md " />
        <div style={style} className="ratings text-white text-sm font-bold w-8 h-8 flex justify-center items-center rounded-full absolute -top-4 -left-3 shadow-xl">{ratings}</div>
      </Link>
    </div>
  )
};

export default Thumb;