import ToolCard from './ToolCard';

const ToolIndex = props => {    
    function generateToolCards(tools) {
        console.log(tools);
        if(tools.length) {
            return tools.map(tool => {
                return <ToolCard key={tool._id} tool={tool} />
            })
        } else {
            return <h4>No tools of this type saved</h4>
        }
    }
    return (
        <div className="tool-index">
            {generateToolCards(props.data)}
        </div>


    )
}

export default ToolIndex;