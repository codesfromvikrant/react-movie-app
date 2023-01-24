import React from "react";
import { useParams } from "react-router-dom";

// config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';

// Components
import Header from './Header';
import LoadingSpinner from './LoadingSpinner'
import MovieInfo from "./MovieInfo";
import Grid from "./Grid";
import Actors from "./Actors";

// Hook
import { useMovieFetch } from "./useMovieFetch";

// Images
import NoImage from '../images/no_image.jpg';


const Movie = () => {

  const { movieId } = useParams();

  const { movie, credits, loading, error } = useMovieFetch(movieId);
  console.log(credits)


  return (
    <>
      <Header movie={movie} />

      {loading && <LoadingSpinner />}

      {movie && credits && <MovieInfo movie={movie} credits={credits} />}

      {movie && credits && <Grid header='Actors'>
        {credits.cast.map(actor => {
          return (
            <Actors
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          )
        })}

      </Grid>}
    </>
  )
};

export default Movie;