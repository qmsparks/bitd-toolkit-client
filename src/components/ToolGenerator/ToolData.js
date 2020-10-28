// import { useEffect } from 'react';
// import useComponents from '../../hooks/useComponents';

const ToolData = props => {

    function handleUpdate() {
        props.newComponent(props.index, props.toolslug, props.component.category)
    }

    return (
        <>
        <p>
            {props.component.name}
        </p>
        <button 
        onClick={e => handleUpdate()}>Reroll</button>
        </>
    )

}


export default ToolData;