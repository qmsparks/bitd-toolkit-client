import {useState} from 'react';

import AuthModel from '../models/AuthModel';

const Register = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        AuthModel.register({username, email, password}).then(response => {
            console.log(response);
            if (response.status === 201) {
                props.history.push('login');
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
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    name="username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                </div>

                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default Register;