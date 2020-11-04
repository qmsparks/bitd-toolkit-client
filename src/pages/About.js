import {FaLinkedin, FaGithub} from 'react-icons/fa';


import '../Sass/About.scss';

const About = props => {

    return(
        <div className="about">

            <div className="card dev-info">
                <div className="card-content">
                    <h3>The developer</h3>
                    <h4>Like what you see here?</h4>
                    <p>Find more:</p>

                    <a className="linkedin" href="https://www.linkedin.com/in/quinlansparks/"><FaLinkedin /></a>
                    <a className="github" href="https://github.com/qmsparks"><FaGithub /></a>
                </div>
            </div>

            <div className="card tech">
                <div className="card-content">
                    <h3>Technologies & Libraries Used</h3>
                    <ul>
                        <li>React</li>
                        <li>Recoil</li>
                        <li>JSON Web Tokens</li>
                        <li>React Router</li>
                        <li>Sass</li>
                        <li>Bulma</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>

            <div className="card coming-soon">
                <div className="card-content">
                    <h3>Coming Soon:</h3>
                    <ul>
                        <li>Add your own custom components into the bucket o' narrative possibilities we pull your tools out of</li>
                        <li>Opt out of components not relevant to your game! Why should you have the possibility of The Lampblacks showing up if they've been neutralized in-fiction?</li>
                        <li>We're gonna do clock management! No more losing index cards -- we live in the <b>future</b>!</li>
                    </ul>
                </div>
            </div>

            <div className="card mit-license">
                <div className="card-content">
                    <h3>Legalese (mine)</h3>
                    <p>Copyright 2020 Quinlan Sparks</p>
                    <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    </p>
                    <p>
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    </p>
                    <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </p>

                </div>
            </div>

            <div className="card bitd-license">
                <div className="card-content">
                    <h3>Legalese (theirs)</h3>
                    <p>
                    This work is based on <a href="http://www.bladesinthedark.com/">Blades in the Dark</a>, product of One Seven Design, developed and authored by John Harper, and licensed for our use under the <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported license</a>.
                    </p>
                </div>
            </div> 

        </div>
    )

}

export default About;