import React, { useState } from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const genre_id_name=[{"id":28,"name":"Action"}, {"id":12,"name":"Adventure"}, {"id":16,"name":"Animation"}, {"id":35,"name":"Comedy"}, {"id":80,"name":"Crime"}, {"id":99,"name":"Documentary"}, {"id":18,"name":"Drama"}, {"id":10751,"name":"Family"}, {"id":14,"name":"Fantasy"}, {"id":36,"name":"History"}, {"id":27,"name":"Horror"}, {"id":10402,"name":"Music"}, {"id":9648,"name":"Mystery"}, {"id":10749,"name":"Romance"}, {"id":878,"name":"Science Fiction"}, {"id":10770,"name":"TV Movie"}, {"id":53,"name":"Thriller"}, {"id":10752,"name":"War"}, {"id":37,"name":"Western"}];
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="imdbimg">
          <Link to={"/"}>
            <img
              className="header_icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </Link>
        </div>
        <div className="pages">
          <Link to={"/movies/popular"}>
            <span>Popular</span>
          </Link>
          <Link to={"/movies/top_rated"}>
            <span>Top Rated</span>
          </Link>
          <Link to={"/movies/upcoming"}>
            <span>Upcoming</span>
          </Link>
        </div>
        <div className="my_dropdown">
          <div class="dropdown">
              <button class="dropbtn">Genre</button>
              <div class="dropdown-content">
                {
                  genre_id_name.map((element,index)=>(
                    <Link to={`/movies/Genre/${element.id}`}>{element.name}</Link>
                  ))
                }
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
