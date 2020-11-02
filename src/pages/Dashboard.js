import {useState} from 'react';
import useUserTools from '../hooks/useUserTools';

import ToolIndex from '../components/Dashboard/ToolIndex';

import '../Sass/Dashboard.scss';

const Dashboard = props => {
    const [tools, filterUserTools] = useUserTools();
    const [activeTab, setActiveTab] = useState(false);

    function handleFilter(tooltype) {
        filterUserTools(tooltype);
        setActiveTab(true);
    }

    return(
        <div>
            <h1>User Dashboard</h1>
            <div className="tabs is-fullwidth is-centered is-boxed">
                <ul className="tool-index-filter">
                    <li  onClick={e => handleFilter('Score')}>
                        <p>Scores</p>
                    </li>
                    <li onClick={e => handleFilter('NPC')}>
                        <p>NPCs</p>
                    </li>
                    <li onClick={e => handleFilter('Ghost')}>
                        <p>Ghosts</p>
                    </li>
                    <li onClick={e => handleFilter('Demon')}> 
                        <p>Demons</p>
                    </li>
                    <li onClick={e=> handleFilter('Forgotten God Cult')}>
                        <p>Forgotten God Cults</p>
                    </li>
                </ul>
            </div>

            {/* {
            activeTab ?
            <ToolIndex data={tools} /> :
            <h4>Select a category above to view your saved tools</h4>
            } */}
            <ToolIndex data={tools} />


        </div>
    )
}

export default Dashboard;