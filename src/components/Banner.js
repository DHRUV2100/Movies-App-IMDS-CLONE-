import React, { Component } from 'react'

import {movies} from '../movieData'

export class Banner extends Component {

  
  render() {
      let moviesElem = movies.results[Math.floor((Math.random() * 10))]
      let backDrop =  moviesElem.backdrop_path;
      let movieName=moviesElem.original_title;
      let movieDes=moviesElem.overview.split('.');
      movieDes=movieDes[0]+movieDes[1];
      console.log(movieName+" "+movieDes);
          return (
       <div className="card banner-card" >
       <img src={`https://image.tmdb.org/t/p/original${backDrop}`} className="card-img-top banner-img" alt="..."/>

         <h5 className="card-title banner-title">{movieName}</h5>
         <p className="card-text  banner-text">{movieDes}</p>
      
     </div>
    )
  }
}

export default Banner