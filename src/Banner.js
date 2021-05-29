// Banner Component

import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // this Math function is grabbing one banner poster randomly from 0 to length - 1 in movies array
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fecthData();
  }, []);

  console.log(movie);

  // So if the description of the banner is huge, then the truncate function will replace the description with " ... "(3 dots) after the character limit(n) i reached
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // ?.(optional chaining) is used beacause if for any reason the backdrop__path is undefined then the app wont freak out and crash
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* <<< Background Image */}
        {/* title */}
        <h1 className="banner__title">
          {/* ?.(optional chaining) is used beacause if for any reason the title, name, original_name is undefined then the app wont freak out and crash */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}

        {/* So after 150 characters are reached then the rest of the description will be replaced by "..." by the truncate function */}
        <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
