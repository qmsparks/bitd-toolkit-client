import {useEffect, useState} from 'react';
import useTools from '../../hooks/useTools';
import useComponents from '../../hooks/useComponents';

import ToolSaveForm from './ToolSaveForm';

import ToolData from './ToolData';

import './ToolGenerator.scss';

const ToolGenerator = props => {
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    const [index, setIndex] = useState(null);
    const [saveForm, setSaveForm] = useState(false);
    

    useEffect(
        function() {
            setTool(null);
            fetchDetails(props.slug);
        },
        // eslint-disable-next-line
        [props.slug]
    )
    
    // useEffect(
    //     function() {
    //         if(component) {
    //             return updateTool();
    //         }
    //     },
    //     // eslint-disable-next-line
    //     [component]
    // )

    // function updateComponent(index, tooltype, category) {
    //     setIndex(index);
    //     fetchComponent(tooltype, category);
    // }

    // function updateTool() {
    //     const newTool = tool;
    //     newTool[index] = component;
    //     setComponent(null);
    //     return setTool(newTool);
    // }

    // function isolateComponents() {
    //     return tool.map((component, index) => {
    //         return <ToolData 
    //         key={component._id} 
    //         component={component}
    //         index={index}
    //         toolslug={props.slug}
    //         newComponent={updateComponent}
    //         />
    //     })
    // }



    function buildRows() {
        if (!details) return <h4>Loading...</h4>
        return details.map((config, i) => {
            return (<tr>
                <td>{config.category}</td>
                    {
                        !tool ?
                        <td>{config.number} </td> :
                        <ToolData category={tool[i]} />
                    }

            </tr>)
        })
    }


    return (
        // <div>
        //     <h3>{props.type}</h3>
        //     {tool && 
        //     <button onClick={e => setSaveForm(true)}>Save Tool</button>
        //     }
        //     {tool && isolateComponents()}
        //     {saveForm && 
        //     <ToolSaveForm 
        //     tool={tool}
        //     type={props.type}
        //     />
        //     }
        //     {!tool && showToolDefaults()}
        //     <button onClick={e => fetchTool(props.slug)}>Get Random {props.type}</button>
        // </div>

        <table className="table">
            <thead>{props.type}</thead>
            <tbody>
                {buildRows()}
            </tbody>
            <tfoot onClick={e => fetchTool(props.slug)}>
                Get Random {props.type}
            </tfoot>
        </table>
    )
}

export default ToolGenerator;