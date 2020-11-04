import {useEffect, useState} from 'react';

import {GiReceiveMoney, GiGargoyle, GiAllSeeingEye, GiBullyMinion, GiRollingDices, GiSpectre} from 'react-icons/gi';

import useTools from '../../hooks/useTools';
import useAuth from '../../hooks/useAuth';
import useComponents from '../../hooks/useComponents';
import ToolSaveForm from './ToolSaveForm';
import ToolData from './ToolData';

import './ToolGenerator.scss';

const ToolGenerator = props => {
    const {type, slug} = props;
    const [user] = useAuth();
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    const [mainIndex, setMainIndex] = useState(null);
    const [nestIndex, setNestIndex] = useState(null);

    const doodleMap = {
        score: <GiReceiveMoney />,
        npc: <GiBullyMinion />,
        ghost: <GiSpectre />,
        demon: <GiGargoyle />,
        cult: <GiAllSeeingEye />
    }

    useEffect(
        function() {
            setTool(null);
            fetchDetails(slug);
        },
        // eslint-disable-next-line
        [slug]
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
        fetchComponent(slug, category);
    }

    function showResults() {
        return details.map((config, i) => {
            return(
                <>
                <h3>{config.category}</h3>
                <ToolData
                toolIndex={i}
                category={tool[i]}
                categoryName={config.category}
                newComponent={updateComponent}
                user={user}
                />
                </>
            )
        })
    }

    return (
        <div className="generator-container">

            <div className="card tool-details">
                    {
                    details ?
                    <div className="card-content">
                    <p>Each {type} comes with:</p>
                    <i className="doodle">{doodleMap[slug]}</i>
                    {details.map(component => {
                        return <li>{component.number} {component.category}</li>
                    })}
                    </div> :
                    <h4>Loading...</h4>
                    }
            </div>

            { tool &&
            <div className="card reroll-info">
                <div className="card-content">
                <i className="active" onClick={e => fetchTool(slug)}><GiRollingDices /></i>
                <p>Click for a whole new {type}</p>

                {user && <small>(Or any individual <i><GiRollingDices /></i> to replace just one piece)</small>}
                </div>
            </div>}


            <div className="result-container">
                    {tool ?
                <div className="results">
                    {showResults()}
                </div> :
                    <div className="roll">
                        <i className="big-roll" onClick={e => fetchTool(slug)}><GiRollingDices /></i>
                    </div>
                    }
            </div>

            <section className="save-sticky">
                {tool &&
                <div className="card">
                    <div className="card-content">
                        {user ? 
                        <ToolSaveForm details={details} tool={tool} type={type} /> :
                        <p className="login-nudge">Hey, if you log in you can save this {type} for later</p>
                    }
                    </div>
                </div>
                }
            </section>
        </div>
    )
}

export default ToolGenerator;