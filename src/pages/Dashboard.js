import useUserTools from '../hooks/useUserTools';

import ToolIndex from '../components/Dashboard/ToolIndex';
import { useEffect } from 'react';


const Dashboard = props => {
    const [tools, fetchUserTools] = useUserTools();

    // FIXME reconfigure so this reaps the benefits of the useeffect now embedded in useUserTools
    useEffect(function() {
        fetchUserTools();
    },
    // eslint-disable-next-line
    [])

    return(
        <div>
            <h1>User Dashboard</h1>
            {tools.length ? 
            <ToolIndex data={tools} /> : 
            <h4>Loading...</h4>}
        </div>
    )
}

export default Dashboard;