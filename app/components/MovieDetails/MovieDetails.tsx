import React from "react";
import Image from "next/image";
import styles from "./MovieDetails.module.css";


interface MovieDetailsProps {
  posterPath: string;
  description: string;
  id: number;
  title: string;
  overview: string;
  original_title: string;
  original_language: string;
  popularity: number;
  releaseDate: string;
  rating: number;
}

const MovieDetails = ({
  posterPath,
  description,
  title,
  releaseDate,
  rating
  
}: MovieDetailsProps) => {
  return (
    
       <div className={styles.detailsContainer}>
      <Image className={styles.image} src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} width={500} height={720} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.info}>
        <p className={styles.infoItem}><strong>Release Date:</strong> {releaseDate}</p>
        <p className={styles.infoItem}><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
     
  )
}

export default MovieDetails;
