import {useEffect, useState} from 'react';
import useTools from '../../hooks/useTools';
import useComponents from '../../hooks/useComponents';

import ToolModel from '../../models/ToolModel';

import ToolData from './ToolData';
import ToolDefaults from './ToolDefaults'

const ToolGenerator = props => {
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    const [index, setIndex] = useState(null);
    

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
            if(component) {
                return updateTool();
            }
        },
        // eslint-disable-next-line
        [component]
    )

    function updateComponent(index, tooltype, category) {
        setIndex(index);
        fetchComponent(tooltype, category);
    }

    function updateTool() {
        const newTool = tool;
        newTool[index] = component;
        setComponent(null);
        return setTool(newTool);
    }

    function isolateComponents() {
        return tool.map((component, index) => {
            return <ToolData 
            key={component._id} 
            component={component}
            index={index}
            toolslug={props.slug}
            newComponent={updateComponent}
            />
        })
    }

    function showToolDefaults() {
        if(details) {
            const arr = Object.entries(details);
            return arr.map(config => {
                return <ToolDefaults key={Math.random()} name={config[0]} num={config[1]} />
            })
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    function saveTool(e) {
        e.preventDefault();
        const components = tool.map(component => {
            return component._id
        });
        const name = 'A placeholder name for now';
        const type = props.type;

        ToolModel.save({name: name, type: type, components: components}).then(data => {
            props.history.push('/dashboard');
        })
    }

    return (
        <div>
            <h3>{props.type}</h3>
            {tool && 
            <button onClick={saveTool}>Save Tool</button>
            }
            {tool && isolateComponents()}
            {!tool && showToolDefaults()}
            <button onClick={e => fetchTool(props.slug)}>Get Random {props.type}</button>
        </div>
    )
}

export default ToolGenerator;