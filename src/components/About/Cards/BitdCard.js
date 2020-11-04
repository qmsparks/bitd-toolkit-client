import {GiInjustice} from 'react-icons/gi';

const BitdCard = props => {
    return (
        <div className="card bitd-license">
        <div className="card-content">
            <h3>Legalese (theirs)</h3>
            <p>
            This work is based on <a href="http://www.bladesinthedark.com/">Blades in the Dark</a>, product of One Seven Design, developed and authored by John Harper, and licensed for our use under the <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported license</a>.
            </p>
            <i><GiInjustice /></i>
        </div>
    </div> 
    )
}

export default BitdCard;