import {useEffect} from 'react';
import useTools from '../../hooks/useTools';
import useComponents from '../../hooks/useComponents';

import ToolData from './ToolData';
import ToolDefaults from './ToolDefaults'

const ToolGenerator = props => {
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    

    useEffect(
        function() {
            setTool(null);
            fetchDetails(props.slug);
        },
        // eslint-disable-next-line
        [props.slug]
    )
    
    useEffect(
        function() {
            console.log('useEffect because tool changed');
            setComponent(null);
        },
        // eslint-disable-next-line
        [tool]
    )

    function updateTool(index, tooltype, category) {
        const newTool = tool;
        fetchComponent(tooltype, category);
        if(component) {
            newTool[index] = component;
            setTool(newTool);
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    function isolateComponents(tool) {
        if(tool) {
            return tool.map((component, index) => {
                return <ToolData 
                key={component._id} 
                component={component}
                index={index}
                toolslug={props.slug}
                newComponent={updateTool}
                />
            })
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    function showToolDefaults(conditions) {
        // NOTE console was getting grumpy about not having unique keys on these children. Temporary fix with Math.random() but that very much feels like a stopgap
        if(conditions) {
            //  FIXME going to adjust the backend to return an array of objects, so I can skip the Object.entries step
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
                isolateComponents(tool):
                showToolDefaults(details)
                
            }
            <button onClick={e => fetchTool(props.slug)}>Get Random {props.type}</button>
        </div>
    )
}

export default ToolGenerator;