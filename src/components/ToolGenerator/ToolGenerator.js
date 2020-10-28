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
        // eslint-disable-next-line
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
        // NOTE console was getting grumpy about not having unique keys on these children. Temporary fix with Math.random() but that very much feels like a stopgap

        if(conditions) {
            const arr = Object.entries(conditions);
            return arr.map(config => {
                return <ToolDefaults key={Math.random()} name={config[0]} num={config[1]} />
            })
        } else {
            return (
                <h4>Loading...</h4>
            )
        }

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