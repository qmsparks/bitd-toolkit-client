import {Link} from 'react-router-dom';
import './ToolCard.scss';

const ToolCard = props => {
    const {name, notes, _id} = props.tool

    return(
        <>
            <Link to={`/tools/${_id}`}>
                <div className="card">
                    <header className="card-header">
                        {name}
                    </header>
                    <div className="card-content">
                        {notes && notes[0]}

                        {/* TODO */}
                        <p>Note to self: track down some fun simple sketch-style images I can legally grab and randomly slap onto these cards</p>
                    </div>
                </div>
            </Link>
        </>
    )

}


export default ToolCard;