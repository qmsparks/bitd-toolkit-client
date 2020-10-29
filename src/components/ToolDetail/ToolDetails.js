import {useState} from 'react';
import ToolModel from '../../models/ToolModel';
import ToolEdit from './ToolEdit';
import {useHistory} from 'react-router-dom';

const ToolDetails = props => {
    const [editForm, setEditForm] = useState(false);
    const {tool} = props;
    const history = useHistory();

    function isolateComponents() {
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
        {
            tool.notes ?
        <p>{tool.notes}</p> :
        <p></p>
        }
        {editForm && <ToolEdit tool={tool} />}
        <button onClick={e => setEditForm(true)}>Update Tool</button>
        <button onClick={handleDelete}>Delete {tool.name}</button>
        </>
    )
}

export default ToolDetails;