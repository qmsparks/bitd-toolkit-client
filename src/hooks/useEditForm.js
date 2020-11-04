import {useState, useEffect} from 'react';

import useNoteInputs from './useNoteInputs';

function useEditForm(props) {
    const [tool, setTool] = useState(props || null)
    const [name, setName] = useState(props.name || "");
    const[components, setComponents] = useState(props.components || []);
    const [type, setType] = useState(props.type || "");
    const [notes, addNote, updateNote, removeNote, setNotes] = useNoteInputs(props.notes);

    useEffect(function(){
        setTool(props);
    },[]);

    useEffect(function() {
        setName(tool.name);
        setComponents(tool.components);
        setType(tool.type);
        setNotes(tool.notes);
    },
    [tool]);

    return [name, setName, components, type, notes, addNote, updateNote, removeNote];

}

export default useEditForm;