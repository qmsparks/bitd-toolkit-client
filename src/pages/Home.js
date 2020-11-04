import {useState} from 'react';

import {BsArrowCounterclockwise} from 'react-icons/bs';

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
                        <p>Need to {loginActive ?
                        'register': 'log in'}?</p>
                        <i onClick={toggleForms}><BsArrowCounterclockwise /></i>
                    </footer>
                </div>
            </div>
            }
            <img className="splash" src="https://www.evilhat.com/home/wp-content/uploads/2016/09/EHP_Blades_Marquee.jpg" alt=""/>
            <h1>
                (Unofficial) Game Master's Toolkit
            </h1>

            <div className="home-cards">
                <div className="card left">
                    <div className="card-content">
                        <h3>What This Is:</h3>
                        <ul>
                            <li>A convenient place to randomize and keep track of some basic set pieces for your games</li>
                            <li>Deeply, <b>deeply</b> self-indulgent of the developer</li>
                            <li>Still growing</li>
                        </ul>
                    </div>
                </div>

                <div className="card right">
                    <div className="card-content">
                        <h3>What this is not</h3>
                        <ul>
                            <li>A way to learn how to play Blades in the Dark without buying the book</li>
                            <li>Seriously, I'm not doing it, <a href="http://bladesinthedark.com/">go buy it</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;