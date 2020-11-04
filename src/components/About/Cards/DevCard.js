import {FaLinkedin, FaGithub} from 'react-icons/fa';

const DevCard = props => {
    return(
        <div className="card dev-info">
                <div className="card-content">
                    <h3>The developer</h3>
                    <p>Quinlan Sparks built this application in a cave from a box of scraps.</p>
                    <p>They're gonna settle in with another box. The cave is cozy.</p>

                    <small>Check out what else is going on in the cave:</small>

                    <div className="links">
                        <a className="linkedin" href="https://www.linkedin.com/in/quinlansparks/"><FaLinkedin /></a>
                        <a className="github" href="https://github.com/qmsparks"><FaGithub /></a>
                    </div>
                </div>
            </div>
    )
}

export default DevCard;