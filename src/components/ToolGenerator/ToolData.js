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
                <td className="detail-cell" category={component.category} onClick={e => handleUpdate(i)}>{component.name}</td>
            )
        })
    }


    return (
        isolateComponents()
    )
}


export default ToolData;