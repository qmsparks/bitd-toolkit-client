import useUserTools from '../hooks/useUserTools';
import ToolDetails from '../components/ToolDetail/ToolDetails';

import '../Sass/ToolDetail.scss';

const ToolDetail = props => {
    const [tools] =  useUserTools(props.match.params.id);

    return (
        <div className="tool-detail">
        {
            tools ?
            <ToolDetails tool={tools}/> :
            <h4>Loading...</h4>
        }
        </div>
    )
}

export default ToolDetail;