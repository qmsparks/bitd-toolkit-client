import ToolModel from '../../models/ToolModel';
import {useHistory} from 'react-router-dom';

const ToolDetails = props => {
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


    <button onClick={handleDelete}>Delete {tool.name}</button>
        </>
    )
}

export default ToolDetails;