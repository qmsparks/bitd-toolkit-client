import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AuthModel from '../../models/AuthModel';
import UserModel from '../../models/UserModel';
import {useSetRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

const Register = props => {
    const setUser = useSetRecoilState(userState);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        AuthModel.register({username, email, password}).then(response => {
            if (response.status === 201) {
                AuthModel.login({email, password}).then(response => {
                    localStorage.setItem("uid", response.signedJwt);
                    UserModel.show().then(response => {
                        setUser(response.data);
                    })
                })
            } else {
                setError(response.message);
            }
        })
    }

    return(
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{color: "red"}}>{error}</p> }
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <div className="control">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text"
                        name="username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        />
                    </div>
                </div>
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
                <input className="button is-small" type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default Register;