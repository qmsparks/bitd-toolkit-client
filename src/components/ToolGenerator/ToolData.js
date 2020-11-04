import {useState} from 'react';
import {GiRollingDices} from 'react-icons/gi';

const ToolData = props => {
    const {category, user} = props;
    const [catSlug, setCatSlug] = useState(category[0].category);
    // let catSlug;
    

    function handleUpdate(catIndex) {
        if (user) return props.newComponent(props.toolIndex, catIndex, catSlug);
    }

    

    function isolateComponents() {
        // catSlug = category[0].category;
        return category.map((component, i) => {
            return  (
                <>
                <p>{component.name}</p>
                {user &&
                <i className="small-reroll" category={component.category} onClick={e => handleUpdate(i)}><GiRollingDices /></i>
                }
                </>
            )
        })
    }


    return isolateComponents()
}


export default ToolData;