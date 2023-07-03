import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Card from '../header/card/Card'
import { useParams } from 'react-router-dom'

const MovieList = () => {
  const [movieList,setMovieList]=useState([]);
  const {type}=useParams();
  useEffect(()=>{
    getData();
  },[])
  useEffect(()=>{
    getData();
  },[type])
  async function getData(){
    const data=await fetch(`https://api.themoviedb.org/3/movie/${type?type:'popular'}?api_key=8111682e6df6ace15c84c593fe0564e5&language=en-US`)
    const res= (await data.json()).results;
    setMovieList(res);
  }
  return (
    <div>
      <div className="movie_list">
        <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2>
        <div className="list_cards">
          {
            movieList.map((movie,index)=>(
              <Card movie={movie}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList

