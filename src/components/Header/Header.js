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

    function toggleNav() {
        const navBurger = document.querySelector('.navbar-burger');
        const target = document.getElementById('mobile-nav');

        navBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    }

    return (
        <>
        <header className="header">

            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mobile-nav" onClick={toggleNav}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="mobile-nav" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to='/' className="navbar-item">
                            Home
                        </NavLink>
                        <NavLink to={'/tools'} className="navbar-item">
                            Tool Generator
                        </NavLink>
                        {user && 
                        <NavLink to={'/dashboard'} className="navbar-item">
                            Dashboard
                        </NavLink>
                        }
                        <NavLink to={'/about'} className="navbar-item">
                            About
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        {user ?
                        <a onClick={logout} className="navbar-item">Logout</a> :
                        <>
                        <a onClick={toggleLogin} className="navbar-item">Log In</a>
                        <a onClick={toggleRegister} className="navbar-item">Sign Up</a>
                        </>
                        }
                    </div>
                </div>
            </nav>

            <img className="splash" src="https://www.evilhat.com/home/wp-content/uploads/2016/09/EHP_Blades_Marquee.jpg" alt=""/>
            <h1 id="logo">
                (Unofficial) Game Master's Toolkit
            </h1>
            
        </header>
        
        {loginSticky && <Login />}
        {registerSticky && <Register />}

        <BackgroundDoodles />
        </>
    )
}


export default Header;