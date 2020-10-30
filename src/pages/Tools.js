import {useState} from 'react';

import ToolGenerator from '../components/ToolGenerator/ToolGenerator';

import './Tools.scss';


const Tools = props => {

    const [tooltype, setTooltype] = useState(null);
    const [slug, setSlug] = useState(null);

    function setGenerator(name, slug) {
        setTooltype(name);
        setSlug(slug);
    }

    return(
        <div>
            <h1>
                Tool Generator
            </h1>
            <div className="tabs is-fullwidth is-toggle">
                <ul>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={e => setGenerator('Score', 'score')}>
                        <p >Score</p>
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={e => setGenerator('NPC', 'npc')}>
                        <p>NPC</p>
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={e => setGenerator('Ghost', 'ghost')}>
                        <p>Ghost</p>
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={e=> setGenerator('Demon', 'demon')}>
                        <p>Demon</p>
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={e => setGenerator('Forgotten God Cult', 'cult')}>
                        <p>Cult</p>
                        </a>
                    </li>
                </ul>
            </div>

            <section>
                {tooltype &&
                <ToolGenerator type={tooltype} slug={slug}/>
                }
            </section>

        </div>
    )
}

export default Tools;