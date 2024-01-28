import React, { useState, useContext } from "react";
import style from './navbar.module.css';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import { UserContext } from "./usercontext";

const Login = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [ role, setRole ] = useState("")

    const [isLogin, setIsLogin] = useContext(LoginContext);
    const [ user, setUser ] = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email= ", email);
        console.log("Password= ", password);
        setUser({ name: null,
                branch: null,
                year: null,
                email: email,
                phone: null,
                role: role,
                password: password });
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
                        <label htmlFor='email'>Email </label>
                        <input name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="off" />
                    </div>
                    <div className={style.userbox}>
                        <label htmlFor='password'>Password</label>
                        <input name="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required autoComplete="off" />
                    </div>
                    <div className={style.userbox} >  
                        <label htmlFor="role">Who are you?</label>
                        <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role} required>
                            <option value="" disabled>Select a role</option>
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                        </select>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
