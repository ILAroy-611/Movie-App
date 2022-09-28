import { useState } from 'react';
import './SignupStyle.css';
import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios'



function SignUp() {
    const [data, setData] = useState({ username: '', email: '', password: '' });

    // const navigate = useNavigate()

    const handleSubmit = (e) => {
        // e.preventdefault();
        console.log(data);
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        // axios.post(url,{
        //     username, email, password
        // })
        // .then(response=>{
        //     if(){

        //     }else{
        //         navigate('/movie-display')
        //     }
        // })
        // .catch()
    }

    return (
        <div className='signup-page'>
            <Link to='/'><div className='sign-up-header'>
                <img
                    className='netflix_logo'
                    src='http://store-images.s-microsoft.com/image/apps.62665.14522505440097099.fb7445b3-34dd-47e7-b484-770a64a497db.f8845ea4-0609-42bd-a457-ff6f187b4bd2'
                    height='50px'
                    alt='' />
                <h2>Movie-App</h2>
            </div>
            </Link>
            <div className='signup-section'>
                <h1>Sign Up</h1>
                <form className='signup-form'>
                    <label htmlFor='username'>UserName : </label><br />
                    <input type="text" name='username' placeholder='UserName' value={data.username} onChange={handleChange} autoComplete='off' /><br />
                    <label htmlFor='email'>Email : </label><br />
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} autoComplete='off' /><br />
                    <label htmlFor='password'>Password</label><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} autoComplete='off' /><br />
                    <button className='signup-form-button' onClick={handleSubmit} >Sign Up</button>
                </form>
                <div className='form-footer'>Already have an account? <Link to='/sign-in' >Sign In</Link></div>
            </div>
        </div>
    )
}

export default SignUp