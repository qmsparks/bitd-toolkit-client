import {NavLink} from 'react-router-dom';

import BackgroundDoodles from '../BackgroundDoodles/BackgroundDoodles';

import useAuth from '../../hooks/useAuth';

import './Sidebar.scss';

const Sidebar = props => {
    const [user, logout] = useAuth();

    return (
        <>
        <aside className="menu">
            <ul className="menu-list">
                    {user &&
                    <li>
                        Hello, {user.username}
                    </li>
                    }
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
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={logout}>Log Out</a>
                    </li>
                    </>
                    }
                    <li>
                    <NavLink to={'/about'}>
                        About
                    </NavLink>
                    </li>
            </ul>
        </aside>
        <img className="splash" src="https://www.evilhat.com/home/wp-content/uploads/2016/09/EHP_Blades_Marquee.jpg" alt=""/>

        <BackgroundDoodles />
        </>
    )
}


export default Sidebar;