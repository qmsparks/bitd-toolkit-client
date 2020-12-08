import {NavLink} from 'react-router-dom';
import {useState} from 'react';

import BackgroundDoodles from '../BackgroundDoodles/BackgroundDoodles';

import useAuth from '../../hooks/useAuth';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

import './Header.scss';

const Header = props => {
    const [user, logout] = useAuth();
    const [loginSticky, setLoginSticky] = useState(false);
    const [registerSticky, setRegisterSticky] = useState(false);

    function toggleLogin() {
        setLoginSticky(!loginSticky);
    }

    function toggleRegister() {
        setRegisterSticky(!registerSticky);
    }

    return (
        <>
        <header className="header">
            <img className="splash" src="https://www.evilhat.com/home/wp-content/uploads/2016/09/EHP_Blades_Marquee.jpg" alt=""/>
            <h1>
                (Unofficial) Game Master's Toolkit
            </h1>
            <div className="menu">
                <ul className="nav">
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/tools'}>
                            Tool Generator
                        </NavLink>
                    </li>
                    {user &&  
                    <>
                    <li>
                    <NavLink to={'/dashboard'}>
                    Dashboard
                    </NavLink>
                    </li>
                    </>
                    }
                    <li>
                    <NavLink to={'/about'}>
                        About
                    </NavLink>
                    </li>
                </ul>
                <ul className="auth">
                    {user ? 
                    <li>
                        <a onClick={logout}>
                            Logout
                        </a>
                    </li>:
                    <>
                    <li>
                        <a onClick={toggleLogin}>
                            Log In
                        </a>
                    </li>
                    <li>
                        <a onClick={toggleRegister}>
                            Sign Up
                        </a>
                    </li>
                    </>}
                </ul>
            </div>
        </header>
        
        {loginSticky && <Login />}
        {registerSticky && <Register />}

        <BackgroundDoodles />
        </>
    )
}


export default Header;