import React, { useState, useContext } from "react";
import style from './navbar.module.css';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const Login = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [isLogin, setIsLogin] = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email= ", email);
        console.log("Pass= ", pass);
        setIsLogin([ true, email ]);
        navigate('/');
        // fetch the user, email and pw must match, other err; if proper cred --> logged in user!
    };

    return (
        <div>
            <h3>Kindly Login to use the services!</h3>
            <div className={style.loginbox}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.userbox}>
                        <input name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required="" autoComplete="off" />
                        <label htmlFor='email'>Email </label>
                    </div>
                    <div className={style.userbox}>
                        <input name="password" id='password' value={pass} onChange={(e) => setPass(e.target.value)} type="password" required="" autoComplete="off" />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
