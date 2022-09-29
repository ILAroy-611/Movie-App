import './MoviecardStyle.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieCard() {

    const [movieData, setMovieData] = useState([])
    const [searchString, SetSearchString] = useState('2021')

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?s=2022&i=tt3896198&apikey=3de80cd2&limit=9999')
            .then(res => { setMovieData([...res.data.Search]) })
    }, []);
    return (
        <div className='movie-page'>
            <Link to='/'>
                <div className='movie-header'>
                    <img
                        className='netflix_logo'
                        src='http://store-images.s-microsoft.com/image/apps.62665.14522505440097099.fb7445b3-34dd-47e7-b484-770a64a497db.f8845ea4-0609-42bd-a457-ff6f187b4bd2'
                        height='50px'
                        alt='' />
                    <h2>Movie-App</h2>
                </div>
            </Link>
            <div className='movie-card-section'>
                {movieData.map(movie => {
                    return (
                        <div key={movie.imdbID} className='movie-card'>
                            <img src={movie.Poster} alt="movie-poster" className="poster"></img>
                            <h4 className="title">Title - {movie.Title}</h4>
                        </div>

                    )

                })}
            </div>
        </div>
    )
}

export default MovieCard;