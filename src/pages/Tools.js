import {useState} from 'react';

import ToolGenerator from '../components/ToolGenerator/ToolGenerator';

import '../Sass/Tools.scss';


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
            <div className="tabs is-fullwidth is-centered is-boxed">
                <ul className="tool-menu">
                    <li onClick={e => setGenerator('Score', 'score')}>
                        <p >Score</p>
                    </li>
                    <li onClick={e => setGenerator('NPC', 'npc')}>
                        <p>NPC</p>
                    </li>
                    <li onClick={e => setGenerator('Ghost', 'ghost')}>
                        <p>Ghost</p>
                    </li>
                    <li onClick={e=> setGenerator('Demon', 'demon')}> 
                        <p>Demon</p>
                    </li>
                    <li onClick={e => setGenerator('Forgotten God Cult', 'cult')}>
                        <p>Forgotten God Cult</p>
                    </li>
                </ul>
            </div>

            <div className="tool-table container is-max-desktop">
                {tooltype &&
                <ToolGenerator type={tooltype} slug={slug}/>
                }
            </div>
        </div>
    )
}

export default Tools;