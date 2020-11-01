import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';
import NoteInput from '../Form Pieces/NoteInput';
import useNoteInputs from '../../hooks/useNoteInputs';

const ToolEdit = props => {
    const {tool} = props;

    const [name, setName] = useState(tool.name);
    const [notes, addNote, updateNote, removeNote] = useNoteInputs(tool.notes);
    const [components, setComponents] = useState([]);
    const [type, setType] = useState(tool.type);
    const history = useHistory();

    const modal = document.getElementById('tool-edit');


    useEffect(function() {
        console.log(tool);
        if(tool) {
            const components = tool.components.map(component => {
                return component._id
            })
            setComponents(components);
        }
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
        <div className="modal" id="tool-edit">
            <div className="modal-background"></div>
            {tool ?
            <div className="modal-content">
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
                        <button onClick={addNote}>+</button>
                        { notes.map((input, i) => {
                            return <NoteInput key={i} index={i} saveNote={updateNote} removeNote={removeNote} value={input} />
                        }) }
                    </div>
                    <input type="submit" value="Update Tool"/>
                </form>
                <button onClick={e => modal.classList.toggle('is-active')}className="modal-close is-large" aria-label="close"></button>
            </div> :
            <h4>Loading...</h4>  
        }
        </div>
    )
}

export default ToolEdit;