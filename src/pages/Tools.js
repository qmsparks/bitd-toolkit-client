import {useState} from 'react';
import {GiHoodedFigure} from 'react-icons/gi';

import ToolGenerator from '../components/ToolGenerator/ToolGenerator';

import '../Sass/Tools.scss';


const Tools = props => {
    const [tooltype, setTooltype] = useState(null);
    const [slug, setSlug] = useState(null);
    const [activeTab, setActiveTab] = useState(null);


    function setGenerator(name, slug) {
        if(activeTab) {
            const deactivateTab = document.getElementById(activeTab);
            deactivateTab.classList.toggle('is-active');
        } else {
            const page = document.querySelector('.tool-page');
            page.classList.add('active-page');
        }

        setActiveTab(`${slug}-tab`);
        const activateTab = document.getElementById(`${slug}-tab`);
        activateTab.classList.toggle('is-active');

        setTooltype(name);
        setSlug(slug);

    }

    return(
        <div className="tool-page">
            <div className="tabs is-centered is-boxed">
                <ul className="tool-menu">
                    <li id="score-tab" onClick={e => setGenerator('Score', 'score')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Score</p>
                        </a>
                    </li>
                    <li id="npc-tab" onClick={e => setGenerator('NPC', 'npc')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>NPC</p>
                        </a>
                    </li>
                    <li id="ghost-tab" onClick={e => setGenerator('Ghost', 'ghost')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Ghost</p>
                        </a>
                    </li>
                    <li id="demon-tab" onClick={e=> setGenerator('Demon', 'demon')}> 
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Demon</p>
                        </a>
                    </li>
                    <li id="cult-tab" onClick={e => setGenerator('Forgotten God Cult', 'cult')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Forgotten God Cult</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="generator-info">
            {
                    !activeTab &&
                    <div className="card info">
                        <div className="card-content">
                        <p>Choose a tooltype from the bar above to start generating story pieces</p>
                            <i className="doodle"><GiHoodedFigure/></i>
                        </div>
                    </div>
                }
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