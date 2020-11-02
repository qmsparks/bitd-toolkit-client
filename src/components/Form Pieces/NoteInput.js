import { useState } from "react";

import {CgCloseR} from 'react-icons/cg';

const NoteInput = props => {
    const {index, value} = props;
    const [note, setNote] = useState(value);

    function handleChange(e) {
        setNote(e.target.value);
        props.saveNote(e.target.value, index);
    }

    function handleRemove(e) {
        e.preventDefault();
        console.log(value);
        props.removeNote(index);
    }

    return (
        <div className="field">
            <div className="control note-input">
                <textarea className="textarea is-medium"
                name={`note ${index}`}
                onChange={e=> handleChange(e)}
                value={value}
                />
                
                <i className="delete-note" onClick={e => handleRemove(e)}><CgCloseR /></i>
            </div>
        </div>
    )
}

export default NoteInput;