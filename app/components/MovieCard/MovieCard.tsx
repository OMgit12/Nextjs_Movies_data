import React from 'react'
import Image from 'next/image'
import styles from './MovieCard.module.css'

interface MovieCardProps {
    title: string,
    posterPath: string,
    description: string,
    id: number,
}
function MovieCard({title , posterPath, description, id} : MovieCardProps) {
  return (
  <div className={styles.card}>
    <Image className={styles.image} src={`https://image.tmdb.org/t/p/w500${posterPath   }`} alt={title} width={200} height={300} /> 
    <div className={styles.ccontent}> 
       <h2 className={styles.title}>{title}</h2>
       <p className={styles.discription}> {description.substring(0, 100)}...</p>
    </div>
    </div>
  )
  
}

export default MovieCard