import {useState} from 'react';
import AuthModel from '../../models/AuthModel';
import UserModel from '../../models/UserModel';

import {useHistory} from 'react-router-dom';

import {useSetRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(userState);
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        AuthModel.login({email, password}).then(response => {
            if(response.status === 200) {
                console.log('login response: ', response);
                localStorage.setItem("uid", response.signedJwt);
                UserModel.show().then(response => {
                    setUser(response.data);
                    history.push('/');
                })
            } else {
                setError(response.message);
            }
            })
    }

    return(
        <div className="auth-sticky" id="login">
                <h2>Log In</h2>
                {error && <p style={{color: "red"}}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                    </div>

                    <input className="button is-small" type="submit" value="Log In"/>
                </form>
        </div>
    )
}

export default Login;