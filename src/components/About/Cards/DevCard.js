import {FaLinkedin, FaGithub} from 'react-icons/fa';

const DevCard = props => {
    return(
        <div className="card dev-info">
                <div className="card-content">
                    <h3>The developer</h3>
                    <h4>Like what you see here?</h4>
                    <p>Find more:</p>

                    <a className="linkedin" href="https://www.linkedin.com/in/quinlansparks/"><FaLinkedin /></a>
                    <a className="github" href="https://github.com/qmsparks"><FaGithub /></a>
                </div>
            </div>
    )
}

export default DevCard;