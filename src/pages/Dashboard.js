import {useEffect, useState} from 'react';
import useUserTools from '../hooks/useUserTools';
import useAuth from '../hooks/useAuth';

import ToolIndex from '../components/Dashboard/ToolIndex';

import '../Sass/Dashboard.scss';

const Dashboard = props => {
    const [user] = useAuth();
    const [tools, filterUserTools] = useUserTools();
    const [activeTab, setActiveTab] = useState(null);

    useEffect(function() {

    })

    function handleFilter(tooltype, clickedTab) {
        if(activeTab) {
            const deactivateTab = document.querySelector(`.${activeTab}`);
            deactivateTab.classList.toggle('is-active');
        } else {
            const page = document.querySelector('.dashboard');
            page.classList.add('active-page');
        }

        setActiveTab(clickedTab);
        const activateTab = document.querySelector(`.${clickedTab}`);
        activateTab.classList.toggle('is-active');

        filterUserTools(tooltype);
    }

    return(
        <>
        {user && 
        <div className="dashboard">
            <div className="tabs is-centered is-boxed">
                <ul className="tool-index-filter">
                    <li className="score-tab" onClick={e => handleFilter('Score', 'score-tab')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Scores</p>
                        </a>
                    </li>
                    <li className="npc-tab" onClick={e => handleFilter('NPC', 'npc-tab')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>NPCs</p>
                        </a>
                    </li>
                    <li className="ghost-tab" onClick={e => handleFilter('Ghost', 'ghost-tab')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Ghosts</p>
                        </a>
                    </li>
                    <li className="demon-tab" onClick={e => handleFilter('Demon', 'demon-tab')}> 
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Demons</p>
                        </a>
                    </li>
                    <li className="cult-tab" onClick={e=> handleFilter('Forgotten God Cult', 'cult-tab')}>
                        {/* eslint-disable-next-line */}
                        <a>
                        <p>Forgotten God Cults</p>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="index-container">
            <ToolIndex data={tools} />
            </div>


        </div>
        }
        </>
    )
}

export default Dashboard;