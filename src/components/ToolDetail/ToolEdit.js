import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';

const ToolEdit = props => {
    const {tool} = props;

    const [name, setName] = useState(tool.name);
    const [notes, setNotes] = useState(tool.notes);
    const [components, setComponents] = useState([]);
    const [type, setType] = useState(tool.type);
    const history = useHistory();


    useEffect(function() {
        const components = tool.components.map(component => {
            return component._id
        })
        setComponents(components);
    },
    // eslint-disable-next-line
    [])

    function handleSubmit(e) {
        e.preventDefault();

        ToolModel.update(tool._id, {name, type, components, notes}).then(data => {
            console.log(data);
            // NOTE would rather have this push back to the tool show page, but for now we do this
            history.push('/dashboard');
        })
    }


    return (
        <div>
            <h3>Update Tool</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label htmlFor="name">Update Name</label>
                    <input 
                    type="text"
                    name="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="notes">Update Notes</label>
                    <input 
                    type="text"
                    name="notes"
                    onChange={e => setNotes(e.target.value)}
                    value={notes}
                    />
                </div>
                <input type="submit" value="Update Tool"/>
            </form>
        </div>
    )
}

export default ToolEdit;