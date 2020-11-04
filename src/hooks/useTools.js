import {useState} from 'react';
import ToolModel from '../models/ToolModel';

function useTools() {
    const [tool, setTool] = useState(null);
    const [details, setDetails] = useState(null);

    function fetchTool(tool) {
        ToolModel.generate(tool).then(data => {
            setTool(data.tool); 
        })
    }

    function fetchDetails(tool) {
        ToolModel.details(tool).then(data => {
            setDetails(data.details);
        })
    }
    
    return [tool, fetchTool, setTool, details, fetchDetails];
}

export default useTools;