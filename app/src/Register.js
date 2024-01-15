import React, { useState, useContext } from "react";
import style  from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const Register = (props) => {

    const navigate = useNavigate();
    const [ isLogin, setIsLogin ] = useContext(LoginContext);

    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [number, setNumber] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name= ", name);
        console.log("Email= ", email);
        setIsLogin([ true, email ]);
        navigate('/');
    };

    return (
        <div className={style.registerbox}>
            <h2>Register</h2>
            <form onSubmit={ handleSubmit }>
                <div className={style.userbox}>  
                    <input id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} type="name" autoComplete="off" />    
                    <label htmlFor="name">Name</label>   
                </div> 
                <div className={style.userbox} >   
                <input id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required="" autoComplete="off" />
                <label htmlFor="email">Email </label>
                </div> 
                <div className={style.userbox} >     
                    <input id="phone" name="phone" value={number} onChange={(e) => setNumber(e.target.value)} type="tel" required="" autoComplete="off" />
                    <label htmlFor="phone">Phone</label>
                </div> 
                <div className={style.userbox} >  
                    <input id="pass" name="pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="off" />
                    <label htmlFor="pass">Password</label>
                </div>
                <button type="submit">Register</button>
            </form>     
        </div>
    )
}

export default Register;
