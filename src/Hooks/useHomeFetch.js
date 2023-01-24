import { useEffect, useState } from 'react';

// API
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {

    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(page);

      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchMovies(1, searchTerm)
  }, [searchTerm]);

  useEffect(() => {
    if (!loadmore) return;

    fetchMovies(state.page + 1, searchTerm);
    setLoadMore(false);
  }, [loadmore, searchTerm, state.page])

  return { state, loading, searchTerm, setSearchTerm, setLoadMore };
}