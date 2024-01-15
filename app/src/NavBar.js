import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo512.png';
import { LoginContext } from './LoginContext';
import profile from './profile.png';
// import style from "./navbar.module.css";

const NavBar = () => {
    const [ isLogin, setIsLogin ] = useContext(LoginContext)
    const [open, setOpen] = useState(false);

    const username = () => {
        if (isLogin[0] !== false) {
            return (
                <h3>{ isLogin[1] }</h3>
            );
        }
    };
    

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

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        {/* <h3>Username<br/><span>IIT V</span></h3> */}
                        <ul>
                            <li>{ isLogin[0] ? <Link to='/profile'>Profile</Link> : <Link to='/login'>Login</Link> }</li>
                            <li>{ isLogin[0] ? <span onClick={logOut}><Link to='/'>Log Out</Link></span> : <Link to='/register'>Register</Link> }</li>
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
            <div>
                { username() }
            </div>
        </div>
    );
};

// function DropdownItem(props){
//     return(
//       <li className = 'dropdownItem'>
//         { props.condition ? <Link to={ props.afterUrl }>{ props.afterLogin }</Link> : <Link to={ props.beforeUrl }>{ props.beforeLogin }</Link> }
//         </li>
//     )
//   }
  

export default NavBar;