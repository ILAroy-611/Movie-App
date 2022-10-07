import './HomepageStyle.css'
// import Header from '../Header/Header.js'
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage-header'>
        <div className='homepage-header-logo'>
          <img
            src='http://store-images.s-microsoft.com/image/apps.62665.14522505440097099.fb7445b3-34dd-47e7-b484-770a64a497db.f8845ea4-0609-42bd-a457-ff6f187b4bd2'
            height='50px'
            alt='' />
          <h2>Movie-App</h2>
        </div>
        <div className='buttons'>
          <Link to='/sign-up'><button className='sign_up_button'>Sign Up</button></Link>
        </div>
      </div>
      <Banner />
    </div>
  )
}



export default Homepage