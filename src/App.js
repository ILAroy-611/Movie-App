
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
// import Homepage from './Components/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>} />
      </Routes>

    </div>
  );
}

export default App;

