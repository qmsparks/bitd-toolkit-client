import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AuthModel from '../../models/AuthModel';

const Register = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        AuthModel.register({username, email, password}).then(response => {
            console.log(response);
            if (response.status === 201) {
                // FIXME having these forms just on sticky notes means I'm gonna need to do something about the way this redirect is done
                // maybe go ahead and set it up so it logs them in automatically, like with the last project
                history.push('/');
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