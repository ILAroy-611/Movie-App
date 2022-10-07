import './SigninStyle.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header'



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
            <Link to='/'><Header/></Link>
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