import {GiDiceTwentyFacesTwenty} from 'react-icons/gi';

const ToolData = props => {
    const {category, user} = props;
    let catSlug;
    

    function handleUpdate(catIndex) {
        if (user) return props.newComponent(props.toolIndex, catIndex, catSlug);
    }

    

    function isolateComponents() {
        catSlug = category[0].category;
        return category.map((component, i) => {
            return  (
                <>
                <p>{component.name}</p>
                {user &&
                <i category={component.category} onClick={e => handleUpdate(i)}><GiDiceTwentyFacesTwenty /></i>
                }
                </>
            )
        })
    }


    return isolateComponents()
}


export default ToolData;