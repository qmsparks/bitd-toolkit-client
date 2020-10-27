import {useState} from 'react';
import ToolModel from '../models/ToolModel';

function useTools(tooltype) {
    const [tool, setTool] = useState(null);

    function fetchTool(tool) {
        ToolModel.generate(tool).then(data => {
            setTool(data.tool);
            console.log(data.tool);
        })
    }
    
    return [tool, fetchTool, setTool];
}

export default useTools;