import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';
import NoteInput from '../Form Pieces/NoteInput';
import useNoteInputs from '../../hooks/useNoteInputs';

const ToolSaveForm = props => {
    const [name, setName] = useState("");
    const [components, setComponents] = useState([]);
    const [type, setType] = useState("");
    const [notes, addNote, updateNote, removeNote] = useNoteInputs([]);
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
                        { notes.map((input, i) => {
                            return <NoteInput key={i} index={i} saveNote={updateNote} removeNote={removeNote} value={input} />
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