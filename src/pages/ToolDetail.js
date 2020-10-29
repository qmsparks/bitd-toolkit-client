import useUserTools from '../hooks/useUserTools';
import ToolDetails from '../components/ToolDetail/ToolDetails';

const ToolDetail = props => {
    const [tools] =  useUserTools(props.match.params.id);

    return (
        <>
        {
            tools ?
            <ToolDetails tool={tools}/> :
            <h4>Loading...</h4>
        }
        </>
    )
}

export default ToolDetail;