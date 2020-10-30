import {useEffect, useState} from 'react';

import {useRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

import useTools from '../../hooks/useTools';
import useComponents from '../../hooks/useComponents';
import ToolSaveForm from './ToolSaveForm';
import ToolData from './ToolData';

import './ToolGenerator.scss';

const ToolGenerator = props => {
    const [user] = useRecoilState(userState);
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    const [mainIndex, setMainIndex] = useState(null);
    const [nestIndex, setNestIndex] = useState(null);
    const [saveForm, setSaveForm] = useState(false);
    

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

    function updateTool() {
        const changedCategory = tool[mainIndex];
        changedCategory[nestIndex] = component;

        const newTool = tool;
        newTool[mainIndex] = changedCategory;
        setComponent(null);
        return setTool(newTool);
    }

    function updateComponent(mainIndex, nestIndex, category) {
        setMainIndex(mainIndex);
        setNestIndex(nestIndex);
        fetchComponent(props.slug, category);
    }

    function buildRows() {
        if (!details) return <h4>Loading...</h4>
        return details.map((config, i) => {
            return (<tr>
                <td>{config.category}</td>
                    {
                        !tool ?
                        <td>{config.number} </td> :
                        <ToolData 
                        toolIndex={i} 
                        category={tool[i]} 
                        newComponent={updateComponent}
                        />
                    }

            </tr>)
        })
    }


    return (
        <>
        <table className="table">
            <thead>{props.type}</thead>
            <tbody>
                {buildRows()}
            </tbody>
            <tfoot onClick={e => fetchTool(props.slug)}>
                Get Random {props.type}
            </tfoot>
        </table>
            {user && tool &&  <button onClick={e => setSaveForm(true)}>Save Tool</button>}
            {saveForm && <ToolSaveForm tool={tool} type={props.type} /> }
        </>
    )
}

export default ToolGenerator;