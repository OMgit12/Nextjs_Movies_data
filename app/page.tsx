import styles from "./page.module.css";
import MovieCard from "./components/MovieCard";

const api_key = process.env.API_KEY;

interface MovieDetails {
  title: string;
  poster_path: string;
  discription: string;
  id: number;
  overview: string;
  original_title: string;
  original_language: string;
  popularity: number;
  release_date: string;
}

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
            poster_path={movie.poster_path}
            discription={movie.overview}
            id={movie.id}
          />
        ))}
      </div>
    </main>
  );
}
