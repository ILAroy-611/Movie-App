import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './MovieStyle.css'


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
            <div className='movie-header'>
                <div >
                    <Link to='/' className='logo'>
                        <img
                            className='netflix_logo'
                            src='http://store-images.s-microsoft.com/image/apps.62665.14522505440097099.fb7445b3-34dd-47e7-b484-770a64a497db.f8845ea4-0609-42bd-a457-ff6f187b4bd2'
                            height='50px'
                            alt='' />
                        <h2>Movie-App</h2>
                    </Link>
                </div>
            </div>
            {/* Movie page: {movieID} <br/> */}
            <img src={movie.Poster} alt='' className='poster' />
            <h2>Title of Movie- {movie.Title}</h2>
            <h3>Year of Release- {movie.Year}</h3>
            <h3>Type/Genre- {movie.Type}</h3>

        </div>
    )
}

export default Movie;