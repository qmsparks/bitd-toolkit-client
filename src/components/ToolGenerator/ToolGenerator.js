import {useEffect} from 'react';
import useTools from '../../hooks/useTools';
import ToolData from '../../components/ToolGenerator/ToolData';

const ToolGenerator = props => {
    const [tool, fetchTool, setTool] = useTools();

    useEffect(
        function() {
            setTool(null);
        },
        [props.slug, setTool]
    )

    function parseToolData(tool) {
        console.log(tool);
        return tool.map(componentType => {
            return componentType.map(component => {
                return <ToolData key={component._id} component={component} />
            })
        })
    }

    return (
        <div>
            <h3>{props.type}</h3>

            {
                tool ?
                parseToolData(tool) :
                <p>Some information about the tooltype you're gonna get.</p>

            }
            <button onClick={e => fetchTool(props.slug)}>Get Random {props.type}</button>
        </div>
    )
}

export default ToolGenerator;