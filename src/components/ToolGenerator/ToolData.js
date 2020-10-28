import { useEffect } from 'react';
import useComponents from '../../hooks/useComponents';

const ToolData = props => {
    const [component, fetchComponent, setComponent] = useComponents();

    useEffect(
        function() {
            setComponent(props.component);
        },
        // eslint-disable-next-line
        [props.component]
    )
    
    return(
        <>
        {
            component ?
            <><p>{component.name}</p>
            <button onClick={e => fetchComponent(props.toolslug, component.category)}>Reroll</button> </>:
            <h4>Loading...</h4>

        }
        
        </>
    )
}


export default ToolData;