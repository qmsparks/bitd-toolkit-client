import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';
import NoteInput from '../Form Pieces/NoteInput';

const ToolSaveForm = props => {
    const [name, setName] = useState("");
    const [components, setComponents] = useState([]);
    const [type, setType] = useState("");
    const [noteInputs, setNoteInputs] =  useState([{value: null}])
    const [notes, setNotes] = useState([""]);
    const history = useHistory();
    
    const modal = document.getElementById('tool-save');

    useEffect(function() {
            const components = props.tool.map(component => {
                return component[0]._id
            })
            setComponents(components);
    
            const type = props.type;
            setType(type);
    },
    // eslint-disable-next-line
    [])

    function handleSubmit(e) {
        e.preventDefault();
        ToolModel.save({name, type, components, notes}).then(data => {
            history.push('/dashboard');
        })
    }

    function addNote(e) {
        e.preventDefault();
        const inputs = [...noteInputs];
        inputs.push({value: null});
        setNoteInputs(inputs);

        const unsavedNotes = [...notes];
        unsavedNotes.push("");
        setNotes(unsavedNotes);
    }

    function updateNote(value, index) {
        const stateNotes = [...notes]
        stateNotes[index] = value;
        return setNotes(stateNotes);
    }

    return (
        <div className="modal" id="tool-save">
            <div className="modal-background"></div>
            <div className="modal-content">
                <h3>Save tool</h3>
                <form id="edit-form" onSubmit={handleSubmit}>
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
                        <button onClick={addNote}>+</button>
                        { noteInputs.map((input, i) => {
                            return <NoteInput index={i} saveNote={updateNote} />
                            })}
                    </div>
                    <input type="submit" value="Save"/>
                </form>
                <button onClick={e => modal.classList.toggle('is-active')}className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default ToolSaveForm;