import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import UserModel from '../../models/UserModel';

import {useRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

const Sidebar = props => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function() {
        if (localStorage.getItem('uid')) {
            UserModel.show().then(response => {
                setUser(response.data);
            })
        }
    }, [setUser]);

    const logout = () => {
        setUser(null);
        localStorage.clear();
    }

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
                        <NavLink to={'/tools'}>
                            Tool Generator
                        </NavLink>
                    </li>
                    {
                        user ? (
                            <>
                            <li>
                            <NavLink to={'/dashboard'}>
                                Dashboard
                            </NavLink>
                            </li>
                            <li className="btn" onClick={logout}>
                                Log Out
                            </li>
                            </>
                        ) : (
                            <>
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
                            </>
                        )
                    }
                    
                    
                    
                    
                </ul>
            </div>
        </aside>
    )
}


export default Sidebar;