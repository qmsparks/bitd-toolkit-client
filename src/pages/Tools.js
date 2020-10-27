import {useState} from 'react';

import ToolGenerator from '../components/ToolGenerator/ToolGenerator';


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
            <nav>
                <button onClick={e => setGenerator('Score', 'score')}>Score</button>
                <button onClick={e => setGenerator('NPC', 'npc')}>NPC</button>
                <button onClick={e => setGenerator('Ghost', 'ghost')}>Ghost</button>
                <button onClick={e=> setGenerator('Demon', 'demon')}>Demon</button>
                <button onClick={e => setGenerator('Forgotten God Cult', 'cult')}>Cult</button>
            </nav>

            <section>
                {tooltype &&
                <ToolGenerator type={tooltype} slug={slug}/>
                }
            </section>

        </div>
    )
}

export default Tools;