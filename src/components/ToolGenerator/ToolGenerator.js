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

    function isolateComponents(tool) {
        return tool.map(component => {
            return <ToolData component={component} toolslug={props.slug}/>
        })
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