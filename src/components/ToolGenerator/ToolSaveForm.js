import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';

const ToolSaveForm = props => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const [components, setComponents] = useState([]);
    const [type, setType] = useState("");
    const history = useHistory();

    useEffect(function() {
        if (components) {
            const components = props.tool.map(component => {
                return component._id
            })
            setComponents(components);
    
            const type = props.type;
            setType(type);
        }
    },
    // eslint-disable-next-line
    [])


    function handleSubmit(e) {
        e.preventDefault();

        ToolModel.save({name, type, components, notes}).then(data => {
            history.push('/dashboard');
        })
    }


    return (
        <div className="modal" id="tool-save">
            <div className="modal-background"></div>
            <div className="modal-content">
                <h3>Save tool</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="name">Save Name</label>
                        <input 
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="notes">Add Notes</label>
                        <input 
                        type="text"
                        name="notes"
                        onChange={e => setNotes(e.target.value)}
                        value={notes}
                        />
                    </div>
                    <input type="submit" value="Save"/>
                </form>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default ToolSaveForm;