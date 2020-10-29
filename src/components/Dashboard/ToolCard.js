import {Link} from 'react-router-dom';

const ToolCard = props => {
    const {name, type, components, notes, _id} = props.tool

    return(
        <>
        {/* Layout note to self: Would love to have the notes hang out in a popover or something, so they show up when you hover over a card here in the index. The actual show page will be more involved, and I'll tile the notes next to the tool details */}

        <Link to={`/tools/${_id}`}>
            <h3>{name}</h3>
            <h4>{type}</h4>
        </Link>
        </>
    )

}


export default ToolCard;