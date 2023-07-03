import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'

const MovieDetail = () => {
  const [currentMovieDetails, setMovie] = useState();
  const [isLoading,setIsLoading]=useState(true);
  const { id } = useParams();
  const getData=() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8111682e6df6ace15c84c593fe0564e5&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  useEffect(()=>{
    getData();
    setTimeout(()=>{
        setIsLoading(false);
    },2500)
  })
  return (
    <>
    {
        isLoading?
        <div className="detailSkeleton">
            <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
                <Skeleton className="topmargin" height={300}  duration={2}/>
                <Skeleton className="topmargin" height={70}  duration={2}/>
                <Skeleton className="topmargin" height={70}  duration={2}/>
                <Skeleton className="topmargin" height={70}  duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <div className="details">
        <div className="img_plus_details">
            <img
            className="backdropImg"
            src={`https://image.tmdb.org/t/p/original/${
                currentMovieDetails ? currentMovieDetails.backdrop_path : ""
            }`}
            />
            <div className="mainData">
            <img
                className="posterImage"
                src={`https://image.tmdb.org/t/p/original/${
                currentMovieDetails ? currentMovieDetails.poster_path : ""
                }`}
            />
            <div className="data">
                <div className="name">
                {currentMovieDetails ? currentMovieDetails.original_title : ""}
                </div>
                <div className="rating">
                <span className="give_right_margin">
                    {currentMovieDetails ? currentMovieDetails.vote_average : ""}
                    <i className="fas fa-star" />
                </span>
                <span className="givemargin">
                    {`(${
                    currentMovieDetails ? currentMovieDetails.vote_count : ""
                    } votes)`}
                </span>
                </div>
                <div className="runtime">
                <span>
                    {`${
                    currentMovieDetails ? currentMovieDetails.runtime : ""
                    } minutes`}
                </span>
                </div>
                <div className="release_date">
                <span>
                    {`Release Date- ${
                    currentMovieDetails ? currentMovieDetails.release_date : ""
                    }`}
                </span>
                </div>

                <div className="budget">
                <span>
                    {`Budget- ${
                    currentMovieDetails ? (currentMovieDetails.budget==0?"No Information":currentMovieDetails.budget) : ""
                    }`}
                </span>
                </div>
                <div className="revenue">
                <span>
                    {`Revenue- ${
                    currentMovieDetails ? (currentMovieDetails.revenue==0?"No Information":currentMovieDetails.revenue) : ""
                    }`}
                </span>
                </div>

                <div className="genre">
                {currentMovieDetails
                    ? currentMovieDetails.genres.map((genre, index) => (
                        <Link style={{textDecoration:'none',color:'white'}} to={`/movies/Genre/${genre.id}`}>
                            <span className="give_right_margin">
                            {genre ? genre.name : ""}
                            </span>
                        </Link>
                    ))
                    : ""}
                </div>
            </div>
            </div>
            <div className="main_desc">
                <span className="overviewDesc">
                    Overview
                </span>
                <span className="desc">
                    {currentMovieDetails?currentMovieDetails.overview:""}
                </span>
            </div>
        </div>
        </div>
    }
    </>
  );
};

export default MovieDetail;
