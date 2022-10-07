import './MoviecardStyle.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

function MovieCard({movieData, setMovieData, searchString, setSearchString}) {

   

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${searchString}&i=tt3896198&apikey=3de80cd2&limit=9999`)
            .then(res => { setMovieData([...res.data.Search]) })
    }, [searchString]);

    return (
        <div className='movie-page'>
            <div className='movie-header'>
                <Link to='/'><Header/></Link>
                <div className='search-box'>
                    <input className='search' type='search' name='searchString' placeholder='search movie here' onChange={e => setSearchString(e.target.value)} />
                </div>
            </div>
            <div className='movie-card-section'>
                {movieData.map(movie => {
                    return (
                        <div key={movie.imdbID} className='movie-card'>
                            <img src={movie.Poster} alt="movie-poster" className="poster"></img>
                            <h4 className="title"><Link to={`/movie/${movie.Title}`} >Title - {movie.Title}</Link></h4>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default MovieCard;