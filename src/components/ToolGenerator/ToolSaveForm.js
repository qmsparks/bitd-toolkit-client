import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {GiChest} from 'react-icons/gi';

import ToolModel from '../../models/ToolModel';
import NoteInput from '../Form Pieces/NoteInput';
import useNoteInputs from '../../hooks/useNoteInputs';

import {CgAddR} from 'react-icons/cg';

const ToolSaveForm = props => {
    const [name, setName] = useState("");
    const [components, setComponents] = useState([]);
    const [type] = useState(props.type);
    const [notes, addNote, updateNote, removeNote] = useNoteInputs([]);
    const history = useHistory();
    const [componentTypes, setComponentTypes] = useState([]);

    const {details, tool} = props;

    useEffect(function(){
        const categories = details.map(component => {
            return component.category;
        })
        setComponentTypes(categories);
    },
    // eslint-disable-next-line
    []);

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

    function handleSubmit() {
        ToolModel.save({name, type, componentTypes, components, notes}).then(data => {
            history.push('/dashboard');
        })
    }

    return (
        <div className="save-form">
            <span>
                <h3>Save this {type}</h3>
                <i className="submit" onClick={handleSubmit}><GiChest /></i>
            </span>
            <form>
                <div className="field">
                    <label htmlFor="name">Save Name</label>
                    <div className="control">
                        <input 
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                    </div>
                    </div>
                    <div className="field">
                        <label htmlFor="notes">Add Notes <i onClick={addNote}><CgAddR /></i></label>
                            <div className="control">
                                { notes.map((input, i) => {
                                    return <NoteInput key={i} index={i} saveNote={updateNote} removeNote={removeNote} value={input} />
                                    })}
                            </div>
                    </div>
                    </form>
        </div>
    )
}

export default ToolSaveForm;