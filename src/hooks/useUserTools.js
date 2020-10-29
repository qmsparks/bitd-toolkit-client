import {useState} from 'react';

import ToolModel from '../models/ToolModel';


function useUserTools() {
    const[tools, setTools] = useState([]);

    function fetchUserTools(id) {
        if (id) {
            ToolModel.show(id).then(data => {
                setTools(data.tool)
            })
        } else {
            ToolModel.all().then(data => {
                setTools(data.tools);
            })
        }
    }

    return [tools, fetchUserTools];
}

export default useUserTools;