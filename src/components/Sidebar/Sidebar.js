import {NavLink, useHistory} from 'react-router-dom';

import BackgroundDoodles from '../BackgroundDoodles/BackgroundDoodles';

import useAuth from '../../hooks/useAuth';

import './Sidebar.scss';

const Sidebar = props => {
    const history = useHistory();
    const [user, setUser] = useAuth();


    function logout() {
        setUser(null);
        localStorage.clear();
        history.push('/');
    }

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

        <BackgroundDoodles />
        </>
    )
}


export default Sidebar;