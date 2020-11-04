import {GiHoodedAssassin, GiDeathJuice, GiSmokeBomb, GiBoneKnife, GiDaemonPull, GiKrakenTentacle, GiNightVision, GiSpiderBot, GiWarlockEye, GiAlienFire, GiLightningDissipation} from 'react-icons/gi';

import './BackgroundDoodles.scss';

const BackgroundDoodles = props => {

    return(
        <div className="doodles">
                <i className="assassin"><GiHoodedAssassin /></i>
                <i className="death-juice"><GiDeathJuice /></i>
                <i className="smoke-bomb"><GiSmokeBomb /></i>
                <i className="bone-knife"><GiBoneKnife /></i>
                <i className="demon-pull"><GiDaemonPull /></i>
                <i className="kraken"><GiKrakenTentacle /></i>
                <i className="night-vision"><GiNightVision /></i>
                <i className="spider-bot"><GiSpiderBot /></i>
                <i className="warlock-eye"><GiWarlockEye /></i>
                <i className="alien-fire"><GiAlienFire /></i>
                <i className="lightning"><GiLightningDissipation /></i>
            </div>
    )
}

export default BackgroundDoodles;