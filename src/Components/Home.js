import React from "react";

// Components
import Header from "./Header";
import HomeSection from "./HomeSection";
import Grid from "./Grid";
import Thumb from "./Thumb";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./Button";

// Hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";

// Image
import NoImage from '../images/no_image.jpg'

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../Config';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setLoadMore } = useHomeFetch();

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {!searchTerm && state.results[5]
        ? (< HomeSection
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[5].backdrop_path}`}
          title={state.results[5].original_title}
          text={state.results[5].overview}
        />)
        : null
      }

      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {
          state.results.map(movie => {
            return (
              <Thumb
                key={movie.id}
                clickable={true}
                movieId={movie.id}
                title={movie.original_title}
                ratings={movie.vote_average}
                releaseDate={movie.release_date}
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
              />
            )
          })
        }
      </Grid>

      {loading && <LoadingSpinner />}
      {state.page < state.total_pages && !loading &&
        (<Button text='Load More' setLoadMore={setLoadMore} />)
      }

      <div className="py-5 px-6 max-w-3xl m-auto font-thin text-center text-white">This is a portfolio Project, built for the purpose showcasing the development work. The Database of movies are taken from www.themoviedb.org</div>

    </>
  )
}

export default Home;