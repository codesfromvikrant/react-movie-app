import { useState, useEffect } from 'react';

import API from '../API'
let movie, credits;

export const useMovieFetch = movieId => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        movie = await API.fetchMovie(movieId);

        credits = await API.fetchCredits(movieId);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { movie, credits, loading, error };
}