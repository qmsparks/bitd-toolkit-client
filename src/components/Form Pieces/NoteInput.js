import { useState } from "react";

const NoteInput = props => {
    const {index} = props;
    const [note, setNote] = useState("");

    function handleChange(e, i) {
        setNote(e.target.value);

        props.saveNote(e.target.value, i);
    }

    return (
        <input 
            type="text"
            name={`note ${index}`}
            onChange={e=> handleChange(e, index)}
            value={note}
            />
    )
}

export default NoteInput;