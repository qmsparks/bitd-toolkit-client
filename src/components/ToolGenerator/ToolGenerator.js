import {useEffect, useState} from 'react';

import {GiDiceTwentyFacesTwenty, GiRobberHand, GiGargoyle, GiAllSeeingEye, GiBullyMinion, GiChest} from 'react-icons/gi';
import {FaGhost} from 'react-icons/fa';

import {useRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

import useTools from '../../hooks/useTools';
import useComponents from '../../hooks/useComponents';
import ToolSaveForm from './ToolSaveForm';
import ToolData from './ToolData';

import './ToolGenerator.scss';

const ToolGenerator = props => {
    const {type, slug} = props;
    const [user] = useRecoilState(userState);
    const [tool, fetchTool, setTool, details, fetchDetails] = useTools();
    const [component, fetchComponent, setComponent] = useComponents();
    const [mainIndex, setMainIndex] = useState(null);
    const [nestIndex, setNestIndex] = useState(null);

    const doodleMap = {
        score: <GiRobberHand />,
        npc: <GiBullyMinion />,
        ghost: <FaGhost />,
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

    function toggleForm() {
        let modal = document.getElementById('tool-save');
        modal.classList.toggle('is-active');
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
                    <p>Click any <i onClick={e => fetchTool(slug)}><GiDiceTwentyFacesTwenty /></i> to get something new!</p>

                    <small>(Or on this one to change everything)</small>
                </div>
            </div>}


            <div className="result-container">
                    {tool ?
                <div className="results">
                    {showResults()}
                </div> :
                    <div className="roll">
                        <i onClick={e => fetchTool(slug)}><GiDiceTwentyFacesTwenty /></i>
                    </div>
                    }
            </div>
                
            <section className="foot">


                {/* FIXME hahah oops people who aren't logged in can still see the reroll instructions right now
                can't have that shit! */}
                {/* TODO Dad's a whole brain genius, why is this save form in a modal, just do another sticky note */}
                {/* {user && tool &&  <span className="save-target" onClick={e => toggleForm()}>Save Tool</span>} */}
                {user && tool &&  <i className="save-target" onClick={e => toggleForm()}><GiChest/></i>}
                {tool && <ToolSaveForm details={details} tool={tool} type={type} />}
            </section>
        </div>
    )
}

export default ToolGenerator;