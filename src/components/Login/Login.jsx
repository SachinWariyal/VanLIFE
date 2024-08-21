import './Login.css'
import { useNavigate } from "react-router-dom"
import { getUsers } from '../../Utils/storage';
import { useState } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const [logindata, setUsers] = useState({
        username : '',
        password : '',
    })
    const handleOnchange = (e) => {
        setUsers({...logindata, [e.target.name] : e.target.value})
    }
    const handleSubmit = () => {
        const users = getUsers();
        const user = users.find((user) => user.username === logindata.username && user.password === logindata.password)

        if(user){
            alert('Login Successful')
            navigate('/')
        }else{
            alert('Invalid Username or password')
        }
      
    }

    const handleRegisterClick = () => {
        navigate("/register")
    }
  return (
    <>
        <div className="login-container">
            <div className="login-form">
            <h1 className='login-text'>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                <div>
                    <input className="username" name='username' type="text" placeholder="Enter Username" value={logindata.username} onChange={handleOnchange}/>
                </div>
                <div>
                    <input className="password" name='password' type="text" placeholder="Enter Password" value={logindata.password} onChange={handleOnchange}/>
                </div>
                <div>
                    <button className="login-button" type='submit'>Login</button>
                </div>
                <div className="register-here">
                    dont have account? please <span className="register-link" onClick={handleRegisterClick}>register</span>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login