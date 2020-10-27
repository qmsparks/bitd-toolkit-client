
import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = props => {
    

    useEffect(function() {

    })

    return (
        <aside>
            <div className="links">
                <ul>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard'}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/tools'}>
                            Tool Generator
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}


export default Sidebar;