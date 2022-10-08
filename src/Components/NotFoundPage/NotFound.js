import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './NotfoundStyle.css' ;

function NotFound(){
    return(
        <div className='not-found-page'>
            <Link to='/'> <Header/> </Link>
            <h3>OOPs!! Something Went Wrong! Please try again.....</h3>
        </div>
    )
}

export default NotFound;