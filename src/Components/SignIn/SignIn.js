import './SigninStyle.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function SignIn() {
    const [data, setData] = useState({ email: '', password: '' });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:4000/users/login',{
            name:data.username, 
            email: data.email, 
            password: data.assword
        })
        .then(response=>{
            if(response.status==200){
                navigate('/movie-display')
            }else{
                navigate('/sign-in')
            }
        })
        .catch()
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        
    }

    return (
        <div className='signin-page'>
            <Link to='/'><div className='sign-in-header'>
                <img
                    className='netflix_logo'
                    src='http://store-images.s-microsoft.com/image/apps.62665.14522505440097099.fb7445b3-34dd-47e7-b484-770a64a497db.f8845ea4-0609-42bd-a457-ff6f187b4bd2'
                    height='50px'
                    alt='' />
                <h2>Movie-App</h2>
            </div>
            </Link>
            <div className='signin-section'>
                <h1>Sign In</h1>
                <form className='signin-form'>
                    <label htmlFor='email'>Email : </label><br />
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} autoComplete='off' /><br />
                    <label htmlFor='password'>Password</label><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} autoComplete='off' /><br />
                    <button className='signup-form-button' onClick={handleSubmit} >Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn