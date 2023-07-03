import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import './Card.css'
import { Link, useParams } from 'react-router-dom'

const Card = ({movie}) => {
    const [isLoading,setIsLoading]=useState(true);
    const {type}=useParams();
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[movie,type])
    return (
        <>
        {
            isLoading?
            <div className='card'>
                <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className='card'>
                    <img className='cardImg' src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`} />
                    <div className="card_overlay">
                        <div className="card_title">
                            {movie?movie.original_title:""}
                        </div>
                        <div className="card_runtime">
                            {movie?movie.release_date:""}
                            <span className="card_rating">
                                {movie?movie.vote_average:""}
                                <i className='fas fa-star'/>
                            </span>
                        </div>
                        <div className="card_desc">
                            {movie?movie.overview.slice(0,118)+'...':""}
                        </div>
                    </div>
                </div>
            </Link>
        }
        </>
    )
}

export default Card
