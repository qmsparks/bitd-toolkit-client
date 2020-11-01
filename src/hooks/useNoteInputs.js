import {useState} from 'react';

function useNoteInputs(noteList) {
    const [notes, setNotes] = useState(noteList || []);

    function addNote(e) {
        e.preventDefault();
        const stateNotes = [...notes];
        stateNotes.push("");
        setNotes(stateNotes);
    }

    function updateNote(value, index) {
        const stateNotes = [...notes]
        stateNotes[index] = value;
        return setNotes(stateNotes);
    }

    function removeNote(index) {
        const stateNotes = [...notes];
        stateNotes.splice(index, 1);
        console.log(stateNotes);
        setNotes(stateNotes);
    }

    return [notes, addNote, updateNote, removeNote];

}


export default useNoteInputs;