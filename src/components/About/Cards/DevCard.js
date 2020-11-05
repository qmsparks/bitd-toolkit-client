import {FaLinkedin, FaGithub} from 'react-icons/fa';

const DevCard = props => {
    return(
        <div className="card dev-info">
                <div className="card-content">
                    <h3>The developer</h3>
                    <p>Quinlan Sparks built this application in a week and a half in a bizarre fugue state</p>
                    <p>They're excited to try out lucidity for the next steps.</p>

                    <small>Check out what else they're up to:</small>

                    <div className="links">
                        <a className="linkedin" href="https://www.linkedin.com/in/quinlansparks/"><FaLinkedin /></a>
                        <a className="github" href="https://github.com/qmsparks"><FaGithub /></a>
                    </div>
                </div>
            </div>
    )
}

export default DevCard;