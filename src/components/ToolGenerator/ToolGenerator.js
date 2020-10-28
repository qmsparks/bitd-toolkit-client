import {useEffect} from 'react';
import useTools from '../../hooks/useTools';
import ToolData from './ToolData';
import ToolDefaults from './ToolDefaults'

const ToolGenerator = props => {
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();

    useEffect(
        function() {
            setTool(null);
            fetchDetails(props.slug);
        },
        [props.slug]
    )


    function parseToolData(generatedTool) {
        return generatedTool.map(componentType => {
            return componentType.map(component => {
                return <ToolData key={component._id} component={component} />
            })
        })
    }

    function showToolDefaults(conditions) {
        const arr = Object.entries(conditions);
        return arr.map(config => {
            return <ToolDefaults name={config[0]} num={config[1]} />
        })
        
    }

    return (
        <div>
            <h3>{props.type}</h3>

            {
                tool ?
                parseToolData(tool) :
                showToolDefaults(details)
            }
            <button onClick={e => fetchTool(props.slug)}>Get Random {props.type}</button>
        </div>
    )
}

export default ToolGenerator;