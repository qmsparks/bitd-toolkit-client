import ToolCard from './ToolCard';

const ToolIndex = props => {    
    function generateToolCards(tools) {
        return tools.map(tool => {
            return <ToolCard key={tool._id} tool={tool} />
        })
    }


    return (
        <div>
            {generateToolCards(props.data)}
        </div>
    )
}

export default ToolIndex;