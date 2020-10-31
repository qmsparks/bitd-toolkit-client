import { useState } from "react";

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
        <>
        <input 
            type="text"
            name={`note ${index}`}
            onChange={e=> handleChange(e)}
            value={value}
            />
            <button onClick={e => handleRemove(e)}>x</button>
            </>
    )
}

export default NoteInput;