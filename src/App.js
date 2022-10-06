
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './Components/SignUp/SignUp';
// import Homepage from './Components/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';
import MovieCard from './Components/MovieCard/MovieCard'
import Movie from './Components/Movie/Movie';


function App() {

  const [movieData, setMovieData] = useState([])
  const [searchString, setSearchString] = useState('2022')

  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/movie-display' element={<MovieCard movieData={movieData} setMovieData={setMovieData} searchString={searchString} setSearchString={setSearchString}/>} />
        <Route path='/movie/:movieID' element={<Movie movie={movieData}/>} />
      </Routes>

    </div>
  );
}

export default App;

