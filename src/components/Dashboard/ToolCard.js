import {Link} from 'react-router-dom';
import './ToolCard.scss';

const ToolCard = props => {
    const {name, type, notes, _id} = props.tool

    return(
        <>
            <Link to={`/tools/${_id}`}>
                <div className="card">
                    <div className="v"></div>
                    <header className="card-header">
                        <h3>
                        {name}
                        </h3>
                    </header>
                    <div className="card-content">
                        <h2>{type}</h2>
                        {notes && <p>{notes[0]}</p>}

                        {/* TODO */}
                        {/* <p>Note to self: track down some fun simple sketch-style images I can legally grab and randomly slap onto these cards</p> */}
                    </div>
                </div>
            </Link>
        </>
    )

}


export default ToolCard;