import ToolCard from './ToolCard';

const ToolIndex = props => {    
    function generateToolCards(tools) {
        console.log(tools);
        if(tools.length) {
            return tools.map(tool => {
                return <ToolCard key={tool._id} tool={tool} />
            })
        } else {
            return (
                <div className="card no-tools">
                    <div className="card-content">
                        <h4>No tools to see here yet</h4>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="tool-index">
            {generateToolCards(props.data)}
        </div>


    )
}

export default ToolIndex;