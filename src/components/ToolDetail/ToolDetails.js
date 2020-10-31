import {useState} from 'react';
import ToolModel from '../../models/ToolModel';
import ToolEdit from './ToolEdit';
import {useHistory} from 'react-router-dom';

const ToolDetails = props => {
    const {tool} = props;
    const history = useHistory();

    function isolateComponents() {
        console.log(tool);
        console.log(tool.components);
        return tool.components.map(component => {
            return <li key={component._id}>{component.name}</li>
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
        <h3>{tool.name}</h3>
        <h5>{tool.type}</h5>
        <ul>
            {
            tool.components ?
            isolateComponents() :
            <h4>Loading...</h4>
            }
        </ul>
        {tool.notes && tool.notes.map(note => <p>{note}</p>)}
        {tool.components && <ToolEdit tool={tool} />}
        <button onClick={toggleForm}>Update Tool</button>
        <button onClick={handleDelete}>Delete {tool.name}</button>
        </>
    )
}

export default ToolDetails;