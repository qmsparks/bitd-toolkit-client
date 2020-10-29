import useUserTools from '../hooks/useUserTools';


const Dashboard = props => {
    const [tools, fetchUserTools] = useUserTools();

    return(
        <div>
            <h1>User Dashboard</h1>
            <button onClick={e => fetchUserTools()}>Test this bad boy out</button>
            {tools.length ? tools.length : <h4>Loading...</h4>}
        </div>
    )
}

export default Dashboard;