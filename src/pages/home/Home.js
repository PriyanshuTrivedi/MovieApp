import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../components/movieList/MovieList';
const Home = () => {

  const [popularMovies,SetPopularMovies]=useState([])

  useEffect(()=>{
    async function getData(){
      const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=8111682e6df6ace15c84c593fe0564e5&language=en-US")
      const res= (await data.json()).results;
      SetPopularMovies(res);
    }
    getData();
  },[])

  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map((movie,index)=>(
              <Link to={`/movie/${movie.id}`}>
                <div className="posterImg">
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                </div>
                <div className="posterImg_overlay">
                  <div className="posterImg_title">
                    {movie.original_title}
                  </div>
                  <div className="posterImg_runtime">
                    {movie.release_date}
                    <span className="posterImg_rating">
                      {movie.vote_average}
                      <i className='fas fa-star'/>
                    </span>
                  </div>
                  <div className="posterImg_desc">
                    {movie.overview}
                  </div>
                </div>
              </Link>
            ))
          }
        </Carousel>
      </div>
      <MovieList/>
    </div>
  )
}

export default Home
