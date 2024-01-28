import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo512.png';
import { LoginContext } from './LoginContext';
import profile from './profile.png';

const NavBar = () => {
    const [ isLogin, setIsLogin ] = useContext(LoginContext);
    const [ open, setOpen ] = useState(false);

    const logOut = () => {
        setIsLogin([ 0, '' ]);
    };

    const [ tabs, setTabs ] = useState([{ name: 'Home', url: '/', condition: 1 },
                                        { name: 'Initiatives', url: '/initiatives', condition: 0 },
                                        { name: 'Media', url: '/media', condition: 1 },
                                        { name: 'Gallery', url: '/gallery', condition: 1 },
                                        { name: 'Services', url: '/services', condition: 0 }]); 

    return (
        <div>
            <div className='NavBar'>
                <div className='menu-container'>
                    <div className='menu-trigger' onClick={() => {setOpen(!open)}} >
                        <img src={profile} alt='Pic here!'></img>
                    </div>

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}` }>
                        <ul>
                            <li>{ isLogin[0] ? <Link to='/profile' onClick={() => {setOpen(!open)}}>Profile</Link> : <Link to='/login' onClick={() => {setOpen(!open)}}>Login</Link> }</li>
                            <li>{ isLogin[0] ? <span onClick={logOut}><Link to='/' onClick={() => {setOpen(!open)}}>Log Out</Link></span> : <Link to='/register' onClick={() => {setOpen(!open)}}>Register</Link> }</li>
                       </ul>
                    </div>
                </div>
                <ul>
                    <li className='Logo'><img src={ Logo } alt = 'Logo' /></li>
                    { tabs.map(tab => (
                        <li key={ tab.name }>{ tab.condition ? <Link to={ tab.url }>{ tab.name }</Link> : isLogin[0] ? ( <Link to={ tab.url }>{ tab.name }</Link> ) : ( <span onClick={ () => alert(`Please log in to view ${tab.name}.`) } style={ { cursor: 'pointer' } }>{ tab.name }</span> ) }</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;