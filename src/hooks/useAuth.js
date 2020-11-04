import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useRecoilState} from 'recoil';
import {userState} from '../recoil/atoms';


import UserModel from '../models/UserModel';
import AuthModel from '../models/AuthModel';

function useAuth() {
    const [user, setUser] = useRecoilState(userState);
    const history = useHistory();

    useEffect(function(){
        if(localStorage.getItem('uid')) {
            UserModel.show().then(response => {
                console.log('user info response: ', response);
                if (response.status === 500) {
                    logout();
                } else {
                    setUser(response.data);
                    AuthModel.extendToken().then(response => {
                        if(response.status === 200) {
                            localStorage.setItem("uid", response.signedJwt);
                            console.log('Shiny new jwt in place');
                        }
                    })
                }
            })
        }
    },
    // eslint-disable-next-line
    []);

    function logout() {
        setUser(null);
        localStorage.clear();
        history.push('/');
    }

    return [user, logout];
}

export default useAuth;