import {useState} from 'react';

import useAuth from '../hooks/useAuth';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

import '../Sass/Home.scss';

const Home = () => {
    const [user] = useAuth();
    const [loginActive, setLoginActive] = useState(true);

    function toggleForms() {
        setLoginActive(!loginActive);
    }

    return (
        <div className="home">
            {!user &&
            <div className="card auth-stickies">
                <div className="card-content">
                    {loginActive ?
                    <Login /> :
                    <Register />
                    }
                <footer className="card-footer">
                    <p onClick={toggleForms}>Need to {loginActive ?
                    'register': 'log in'}?</p>
                </footer>
                </div>
            </div>
            }
            <img className="splash" src="https://www.evilhat.com/home/wp-content/uploads/2016/09/EHP_Blades_Marquee.jpg" alt=""/>
            <h1>
                (Unofficial) Game Master's Toolkit
            </h1>

            <div className="columns">
                <div className="column">
                    <div className="card">
                    <section>What this is</section>
                    </div>

                </div>
                <div className="column">
                    <div className="card">
                    <section>What this is not</section>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;