import {useState} from 'react';
import ComponentModel from '../models/ComponentModel';

function useComponents() {
    const [component, setComponent] = useState(null);

    function fetchComponent(tool, category) {
        ComponentModel.random(tool, category).then(data => {
            return setComponent(data.component);
        })

    }

    return[component, fetchComponent, setComponent];
}

export default useComponents;
