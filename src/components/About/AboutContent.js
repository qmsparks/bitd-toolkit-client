import DevCard from './Cards/DevCard';
import TechCard from './Cards/TechCard';
import GoalsCard from './Cards/GoalsCard';
import MITCard from './Cards/MITCard';
import BitdCard from './Cards/BitdCard';

import './AboutContent.scss';

const AboutContent = props => {

    return(
        <div className="stickies-container">
            <DevCard />
            <TechCard />
            <GoalsCard />
            <MITCard />
            <BitdCard />
        </div>
    )

}

export default AboutContent;