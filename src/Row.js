// Row Component

import React, { useState, useEffect } from 'react'
import axios from './axios';
// import requests from './requests';

const baseurl = 'https://image.tmdb.org/t/p/original/';

// getting the title from the Row title mentioned in the App.js Row component call
function Row({ title, fetchUrl }) {

    // Using State  
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    // By using this Hook, you tell React that your component needs to do something after render
    useEffect(() => { 
        // if [], run once when the row loads and dont run again

        async function fetchData() {
            // Here we are making requests to get the info

            // request will have the data fetched frome the API and we can use it to display the movies
            const request = await axios.get(fetchUrl);

            // here we are just checking what data is coming back from the requested URL
            console.log(request.data.results);
            setMovies(request.data.results);
            return request; 
        }
        fetchData();

    }, [fetchUrl]);
    // you have to mention the fetchUrl as it is out of the useEffect block and is one the dependencies of useEffect Hook

    console.table(movies);  

  return (
    <div className="row"> 
        {/* title */}
        <h2>{title}</h2>

        <div className="row__posters">
            {/* several row__poster(s) */}
            
            {/* movies.map will iterate through the array conataining the netflix movies */}
            {movies.map(movie => (
                <img src={`${baseurl}${movie.poster_path}` } alt={movie.name}></img>
            ))}
        </div>

        {/* container -> posters */}

    </div>
  );
}

export default Row;