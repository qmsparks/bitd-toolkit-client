import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {userState} from '../recoil/atoms';


import UserModel from '../models/UserModel';

function useAuth() {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.getItem('uid')) {
            UserModel.show().then(response => {
                setUser(response.data);
            })
        }
    },
    // eslint-disable-next-line
    []);

    return [user, setUser];
}

export default useAuth;