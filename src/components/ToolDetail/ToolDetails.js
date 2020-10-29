
const ToolDetails = props => {
    const {tool} = props;

    function isolateComponents() {
        return tool.components.map(component => {
        return <li key={component._id}>{component.name}</li>
        })
    }

    return( 
        <>
        <h3>{tool.name}</h3>
        <h5>{tool.type}</h5>
        <ul>
            {
            tool.components ?
            isolateComponents() :
            <h4>Loading...</h4>
            }
        </ul>
        {
            tool.notes ?
        <p>{tool.notes}</p> :
        <p></p>
        }
        </>
    )
}

export default ToolDetails;