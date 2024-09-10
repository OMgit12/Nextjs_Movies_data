
import MovieDetails from "../../components/MovieDetails/MovieDetails";

interface MovieDetailsProps {
    params: {
        id: string
    }
}

const getMoviesDetails = async (id: string) => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    return data
}

const movieDetails = async ({ params} : MovieDetailsProps)=> {
    const {id} = params

    const data = await getMoviesDetails(id)
    console.log(data) 
    return (
        <div>
           <MovieDetails  
                posterPath={data.poster_path}
                title={data.title}
                description={data.overview}
                releaseDate={data.release_date}
                rating={data.vote_average} id={0} overview={""} original_title={""} original_language={""} popularity={0} />
    </div>
    )
}

export default movieDetails