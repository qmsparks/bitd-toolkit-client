const ToolData = props => {
    const {category} = props;
    let catSlug;
    

    function handleUpdate(catIndex) {
        props.newComponent(props.toolIndex, catIndex, catSlug);
    }

    

    function isolateComponents() {
        catSlug = category[0].category;
        return category.map((component, i) => {
            return  (
                <td category={component.category} onClick={e => handleUpdate(i)}>{component.name}</td>
            )
        })
    }


    return (
        isolateComponents()
    )
}


export default ToolData;