import styles from "./page.module.css";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import type { Metadata } from "next";

const api_key = process.env.API_KEY;

interface MovieDetails {
  title: string;
  poster_path: string;
  description: string;
  id: number;
  overview: string;
  original_title: string;
  original_language: string;
  popularity: number;
  release_date: string;
}

export const metadata: Metadata = {
  title: "Popular Movies",
  description: "Get all popular movies here",
};

const getMovies = async () => {
  const MoviesList = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  );
  const Moviesjson = await MoviesList.json();

  return Moviesjson;
};
export default async function Home() {
  const Movies = await getMovies();
  // console.log(Movies)
  return (
    <main className={styles.main}>
      <h1>The movies Database </h1>
      <div>
        {Movies.results.map((movie: MovieDetails) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            description={movie.overview}
            id={movie.id}
          />
        ))}
      </div>
    </main>
  );
}
