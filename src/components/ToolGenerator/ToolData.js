const ToolData = props => {
    
    function getNames(array) {
        return array.map(component => {
            return <p>{component.name}</p>
        })
    }


    return (
        <div>
            <p>{props.type}</p>
            {getNames(props.data)}
        </div>
    )

}


export default ToolData;