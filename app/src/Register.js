import React, { useState, useContext } from "react";
import style  from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import { UserContext } from "./usercontext";

const Register = (props) => {

    const navigate = useNavigate();
    const [ isLogin, setIsLogin ] = useContext(LoginContext);
    const [ user, setUser ] = useContext(UserContext);

    const [ name, setName ] = useState(null);
    const [ email, setEmail ] =useState(null);
    const [ phone, setPhone ] = useState(null);
    const [ branch, setBranch ] = useState(null);
    const [ year, setYear ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ role, setRole ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name= ", name);
        console.log("Email= ", email);
        setUser({ name: name,
                branch: branch,
                year: year,
                email: email,
                phone: phone,
                role: role,
                password: password });
        setIsLogin([ true, email ]);
        navigate('/');
    };

    return (
        <div className={style.registerbox}>
            <h2>Register</h2>
            <form onSubmit={ handleSubmit }>
                <div className={style.userbox}>  
                    <input id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} type="text" required autoComplete="off" />    
                    <label htmlFor="name">Name</label>   
                </div> 
                <div className={style.userbox} >  
                    <input id="branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} type="text" required autoComplete="off" />
                    <label htmlFor="branch">Branch</label>
                </div>
                <div className={style.userbox}>
                    <input id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} type="number" required autoComplete="off" onkeydown="return false" onwheel="return false"/>
                    <label htmlFor="year">Year</label>
                </div>
                <div className={style.userbox} >   
                <input id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="off" />
                <label htmlFor="email">Email</label>
                </div> 
                <div className={style.userbox} >     
                    <input id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="number" required autoComplete="off" />
                    <label htmlFor="phone">Phone</label>
                </div> 
                <div className={style.userbox} >  
                    <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={style.userbox} >  
                    <label htmlFor="role">Who are you?</label>
                    <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role} required>
                        <option value="" disabled>Select a role</option>
                        <option value="Student">Student</option>
                        <option value="Alumni">Alumni</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>     
        </div>
    )
}

export default Register;
