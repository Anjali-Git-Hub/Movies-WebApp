import React from 'react'
import MovieCard from './MovieCard';
import styles from "./MoviesList.module.css";
function Movielist({data}) {
 const {moviesApiResponse,isError,errorMsg}=data;
 if(isError){
   return <h2>{errorMsg}</h2>
 }
 if(moviesApiResponse &&  moviesApiResponse.Response==="False"){
    return <h2>{moviesApiResponse.Error}</h2>
 }

 return <>
 <div className={`container ${styles.moviesList}`}>
 {moviesApiResponse &&   
 moviesApiResponse.Search.map((movie)=> <MovieCard  key={movie.imdbID}  {...movie}/>)
}
</div>
</>
}

export default Movielist

