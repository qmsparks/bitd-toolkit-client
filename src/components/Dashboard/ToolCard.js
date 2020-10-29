// NOTE going to need to remember to import {Link} from reat-router-dom when I set up show pages

const ToolCard = props => {
    const {name, type, components, notes, _id} = props.tool


    function isolateComponents() {
        return components.map(component => {
        return <li>{component.name}</li>
        })
    }

    return(
        <>
        <h3>{name}</h3>
        <h4>{type}</h4>
        <ul>
            {isolateComponents()}
        </ul>
        </>
    )

}


export default ToolCard;