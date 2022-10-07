import { useState } from 'react';
import './SignupStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';



function SignUp() {
    const [data, setData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [validateData, setValidateData] = useState({ invalidUsername: null, invalidEmail: null, invalidPassword: null });

    const navigate = useNavigate();

    //regexp for validation
    const EMAIL_REEGEX = new RegExp('^[a-zA-Z]([a-zA-Z0-9]{5,20})@[a-zA-Z]{4,10}[\.][a-z]{2,4}$');
    const USERNAME_REGEX = new RegExp('^[a-zA-Z_$][a-zA-Z0-9]{5,14}');
    const PASSWORD_REGEX = new RegExp('[A-Z][a-zA-Z0-9@#!]{5,9}');

    //to post user data to backend/DB using axios when user submit the form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        axios.post('http://localhost:4000/users/register', {
            name: data.username,
            email: data.email,
            password: data.password
        })
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    navigate('/movie-display')
                } else {
                    navigate('/sign-up')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    //to set state
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    //method to validate username- all these methods are called when mouse leaves the input field
    const isUsernameValid = (event) => {
        if (data.username.length != 0) {
            setError('')
            console.log(data);
            if (!USERNAME_REGEX.test(data.username)){
                setValidateData({ ...validateData, invalidUsername: true });
                console.log(validateData);
                
            }
            else{
                setValidateData({ ...validateData, invalidUsername: false });
                console.log(validateData)
            }
        }
        else {
            setError('Username cant be empty!')
            return false
        }
    }

    //method to validate email
    const isEmailValid = (event) => {
        if (data.email.length != 0){
            setError('')
            if (!EMAIL_REEGEX.test(data.email)){
            setValidateData({ ...validateData, invalidEmail: true});
            
        }
        else{
            setValidateData({ ...validateData, invalidEmail: false });
                console.log(validateData)
        }
    }
        else {
            setError('Email cant be empty!');
        }
    }

    //method to validate password
    const isPasswordValid = (event) => {
        if (data.password.length != 0) {
            setError('')
            if (!PASSWORD_REGEX.test(data.password)){
            setValidateData({ ...validateData, invalidPassword: true });
            
        }
        else{
            setValidateData({ ...validateData, invalidPassword: false });
                console.log(validateData)
        }
    }
        else {
            setError('Password cant be empty!')
            return false;
        }
    }


    return (
        <div className='signup-page'>
            <Link to='/'><Header/></Link>
            <div className='signup-section'>
                <h1>Sign Up</h1>
                <form className='signup-form'>
                    <label htmlFor='username'>UserName : </label><br />
                    <input type="text" name='username' placeholder='User Name' value={data.username} onChange={handleChange} onMouseLeave={isUsernameValid} autoComplete='off' /><br />
                    {validateData.invalidUsername && <p className='note'>Username must start with letter/_/$ and can only consists of alphanumeric characters and length should be 5-15 characters!</p>}
                    <label htmlFor='email'>Email : </label><br />
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} onMouseLeave={isEmailValid} autoComplete='off' /><br />
                    {validateData.invalidEmail && <p className='note'>Email must be valid! </p> }
                    <label htmlFor='password'>Password</label><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} onMouseLeave={isPasswordValid} autoComplete='off' /><br />
                    {validateData.invalidPassword && <p className='note'>Password must be valid!</p>}
                    {/* {<input type="submit" value='Sign-up'/> } */}
                    <p className='note'>{error}</p>
                    <button onClick={handleSubmit} className='signup-form-button'>Sign Up</button>
                    
                </form>
                <div className='form-footer'>Already have an account? <Link to='/sign-in' >Sign In</Link></div>
            </div>
        </div>
    )
}

export default SignUp