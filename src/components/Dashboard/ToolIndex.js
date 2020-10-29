const ToolIndex = props => {    
    function generateToolCards(tools) {
        return tools.map(tool => {
            return <h4>{tool.name}</h4>
        })
    }


    return (
        <div>
            {generateToolCards(props.data)}
        </div>
    )
}

export default ToolIndex;