import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetail.module.css"

export async  function loader({params}){
  const imdbID=params.ImdbId
  const endPoint=`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`

  try {
    const response = await axios.get(endPoint)
    return {movieDetailApi:response.data,isError:false,errorMsg:""}
   
    
  } catch (error) {
    const errorMsg = error?.response?.data?.Error || error.message || "something went wrong";
    return {movieDetailApi:null,isError:false,errorMsg}
 

  }
 
}



function SingleMovieDetails() {
  const {movieDetailApi,isError,errorMsg} =useLoaderData()
  if(isError){
    <h2>{errorMsg}</h2>
  }
  if(movieDetailApi &&  movieDetailApi.Response==="False"){
    return <h2>{movieDetailApi.Error}</h2>
 }

 return (
    <div className={`container ${styles.movieDetail}`}>
        <div className={styles.infoOnLeft}>
            <h2>{movieDetailApi.Title}</h2>
            <img src={movieDetailApi.Poster} alt={movieDetailApi.Title} />

            <p className={styles.infoPara}>
                <span className={styles.key}>Release Date </span>
                <span className={styles.value}>{movieDetailApi.Released}</span>
            </p>
            <p className={styles.infoPara}>
                <span className={styles.key}> Genre </span>
                <span className={styles.value}> {movieDetailApi.Genre}</span>
            </p>
            <p className={styles.infoPara}>
                <span className={styles.key}>Runtime </span>
                <span className={styles.value}> {movieDetailApi.Runtime}</span>
            </p>
            <p className={styles.infoPara}>
                <span className={styles.key}>Language </span>
                <span className={styles.value}>{movieDetailApi.Language}</span>
            </p>

            <p className={styles.infoPara}>
                <span className={styles.key}>Awards </span>
                <span className={styles.value}> {movieDetailApi.Awards}</span>
            </p>
        </div>
        <div className={styles.infoOnright}>
            <div className="plot">
                <div className={styles.bigInfo}>
                    <h3>Plot</h3>
                    <p>{movieDetailApi.Plot}</p>
                </div>
                <div className={styles.bigInfo}>
                    <h3>Actors</h3>
                    <p>{movieDetailApi.Actors}</p>
                </div>
                <div className={styles.bigInfo}>
                    <h3>Country</h3>
                    <p>{movieDetailApi.Country}</p>
                </div>
                <h2>More Info</h2>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Director </span>
                    <span className={styles.value}>
                        {movieDetailApi.Director}
                    </span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>imdb Rating </span>
                    <span className={styles.value}>
                        {movieDetailApi.imdbRating}
                    </span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>imdb Votes </span>
                    <span className={styles.value}>
                        {movieDetailApi.imdbVotes}
                    </span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Boxoffice </span>
                    <span className={styles.value}>
                        {movieDetailApi.BoxOffice}
                    </span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Metascore</span>
                    <span className={styles.value}>
                        {movieDetailApi.Metascore}
                    </span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Rated</span>
                    <span className={styles.value}>
                        {movieDetailApi.Rated}
                    </span>
                </p>
            </div>
        </div>
    </div>
);

}

export default SingleMovieDetails;




