import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import ToolModel from '../../models/ToolModel';
import NoteInput from '../Form Pieces/NoteInput';
import useNoteInputs from '../../hooks/useNoteInputs';

const ToolSaveForm = props => {
    const [name, setName] = useState("");
    const [components, setComponents] = useState([]);
    const [type] = useState(props.type);
    const [notes, addNote, updateNote, removeNote] = useNoteInputs([]);
    const history = useHistory();
    const [componentTypes, setComponentTypes] = useState([]);

    const {details, tool} = props;
    
    const modal = document.getElementById('tool-save');

    useEffect(function(){
        const categories = details.map(component => {
            return component.category;
        })
        setComponentTypes(categories);
    },[]);

    useEffect(function() {
        updateFormComponents();
    },
    // eslint-disable-next-line
    [props])

    function updateFormComponents() {
        const components = tool.map(componentType => {
            console.log(componentType);
            return componentType.map(component => {
                return component.name;
            })
        })
        setComponents(components);
    }

    function handleSubmit(e) {
        e.preventDefault();
        ToolModel.save({name, type, componentTypes, components, notes}).then(data => {
            history.push('/dashboard');
        })
    }

    function toggleForm() {
        modal.classList.toggle('is-active');
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
                <button onClick={toggleForm}className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default ToolSaveForm;