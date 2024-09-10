import React from 'react'
import Image from 'next/image'

interface MovieCardProps {
    title: string,
    poster_path: string,
    discription: string,
    id: number,
}
function MovieCard({title , poster_path, discription, id} : MovieCardProps) {
  return (
  <>
    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width={200} height={300} /> 
    <div> 
       <h2>{title}</h2>
       <p>{discription}</p>

    </div>
    </>
  )
  
}

export default MovieCard