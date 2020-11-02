import {useState} from 'react';
import ToolModel from '../../models/ToolModel';
import ToolEdit from './ToolEdit';
import {useHistory} from 'react-router-dom';

import './ToolDetail.scss';

const ToolDetails = props => {
    const {tool} = props;
    const history = useHistory();

    function isolateComponents() {
        console.log(tool);
        console.log(tool.components);
        return tool.components.map((component, i) => {
            return (
                <>
                <div className="panel-block category-name">
                    {tool.componentTypes[i]}
                </div>
                {tool.components[i].map(component => {
                    return(
                        <div className="panel-block">
                            {component}
                        </div>
                    )
                })}
                </>
                
            )
        })
    }

    function handleDelete(e) {
        e.preventDefault();

        console.log(tool._id);
        ToolModel.destroy(tool._id).then(data => {
            console.log(data);
            history.push('/dashboard');
        })
    }

    function toggleForm() {
        let modal = document.getElementById('tool-edit');
        modal.classList.toggle('is-active');
    }

    return( 
        <>
        <section className="tool-show-container">
            <div className="columns">

                <div className="panel column tool-detail">
                    <p className="panel-heading">{tool.type}</p>
                    <div className="panel-block tool-name">
                        {tool.name}
                    </div>
                    <div className="components">
                        {tool.components ?
                        isolateComponents() :
                        <h4>Loading...</h4>}
                    </div>
                </div>

                <div className="panel column tool-notes">
                    <p className="panel-heading">Notes</p>
                    {tool.notes && tool.notes.map(note => <div className="panel-block">{note}</div>)}
                </div>
            </div>

        </section>
        {tool.components && <ToolEdit tool={tool} />}
        <div className="buttons">
            <div onClick={toggleForm} className="block">
                <span className="tag is-warning">Update Tool</span>
            </div>
            <div onClick={handleDelete} className="block">
                <span className="tag is-danger">Delete {tool.name}
                <button className="delete is-small"></button>
                </span>
            </div>

        </div>
        </>
    )
}

export default ToolDetails;