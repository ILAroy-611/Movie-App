import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './MovieStyle.css'
import Header from '../Header/Header';


function Movie({ movieData }) {

    const { movieID } = useParams();
    const [movie, setMovie] = useState({});
    const m = movieID.replace(/ /g, '%20');

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${m}&i=tt3896198&apikey=3de80cd2&limit=9999`)
            .then(res => {
                setMovie({ ...res.data.Search[0] })
                console.log(res.data.Search[0])
                console.log('movie', movie)
            })
    }, []);

    return (
        <div className='movie-section'>
            <Link to='/'><Header /></Link>
            {/* Movie page: {movieID} <br/> */}
            <img src={movie.Poster} alt='' className='poster' />
            <h2>Title of Movie- {movie.Title}</h2>
            <h3>Year of Release- {movie.Year}</h3>
            <h3>Type/Genre- {movie.Type}</h3>

        </div>
    )
}

export default Movie;