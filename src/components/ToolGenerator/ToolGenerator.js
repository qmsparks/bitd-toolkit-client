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
            return (
            <tr>
                <th className="category-cell">{config.category}</th>
                    {
                        !tool ?
                        <td className="number-cell">{config.number} </td> :
                        <ToolData 
                        toolIndex={i}
                        category={tool[i]}
                        categoryName={details[i].category} 
                        newComponent={updateComponent}
                        user={user}
                        />
                    }

            </tr>
            )
        })
    }

    function toggleForm() {
        let modal = document.getElementById('tool-save');
        modal.classList.toggle('is-active');
    }


    return (
        <div className="generator-container">
            <div className="table-container">
                <table className="table">
                    <tbody>
                        {buildRows()}
                    </tbody>
                </table>
                {user && tool &&  <span className="save-target" onClick={e => toggleForm()}>Save Tool</span>}
            </div>
            
            <section className="foot">
                <span onClick={e => fetchTool(props.slug)}>Get Random {props.type}</span>
                {tool && <ToolSaveForm details={details} tool={tool} type={props.type} />}
            </section>
        </div>
    )
}

export default ToolGenerator;