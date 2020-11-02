import {useEffect, useState} from 'react';

import ToolModel from '../models/ToolModel';


function useUserTools(toolId) {
    const[tools, setTools] = useState([]);

    useEffect( function() {
        console.log(toolId);
        fetchUserTools(toolId);
    },
    [toolId]);


    function fetchUserTools(id) {
        if (id) {
            ToolModel.show(id).then(data => {
                setTools(data.tool)
            })
        } else {
            ToolModel.all().then(data=> {
                setTools(data.tools);
            })
        }
    }

    function filterUserTools(type) {
        ToolModel.filter(type).then(data => {
            setTools(data.tools);
        })
    }

    return [tools, filterUserTools];
}

export default useUserTools;