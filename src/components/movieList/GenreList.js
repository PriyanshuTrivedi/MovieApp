import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieList.css';
import Card from '../header/card/Card';

const GenreList = () => {
    const [movieList,setMovieList]=useState([]);
    const {genre}=useParams();

    const getGenre=()=>{
        switch(genre?genre:""){
            case '28':
                return "Action";
            case '12':
                return "Adventure";
            case '16':
                return "Animation";
            case '35':
                return "Comedy";
            case '80':
                return "Crime";
            case '99':
                return "Documentary";
            case '18':
                return "Drama";
            case '10751':
                return "Family";
            case '14':
                return "Fantasy";
            case '36':
                return "History";
            case '27':
                return "Horror";
            case '10402':
                return "Music";
            case '9648':
                return "Mystery";
            case '10749':
                return "Romance";
            case '878':
                return "Science Fiction";
            case '10770':
                return "TV Movie";
            case '53':
                return "Thriller";
            case '10752':
                return "War";
            case '37':
                return "Western";
            default:
                return "Kuch Nahi mila";
        }
    }

    useEffect(()=>{
        getData();
    },[])
    useEffect(()=>{
        getData();
    },[genre])
    async function getData(){
        const data=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8111682e6df6ace15c84c593fe0564e5&with_genres=${genre?genre:''}`)
        const res= (await data.json()).results;
        setMovieList(res);
    }
    return (
        <div>
            <div className="movie_list">
            <h2 className="list_title">{getGenre()}</h2>
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

export default GenreList
