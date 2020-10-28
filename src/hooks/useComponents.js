import {useState} from 'react';
import ComponentModel from '../models/ComponentModel';

function useComponents() {
    const [component, setComponent] = useState(null);

    function fetchComponent(tool, category) {
        ComponentModel.random(tool, category).then(data => {
            setComponent(data.component[0]);
            console.log(data.component[0]);
        })
    }

    return[component, fetchComponent, setComponent];
}

export default useComponents;
