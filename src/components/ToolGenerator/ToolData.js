const ToolData = props => {
    const {category} = props;
    // function handleUpdate() {
    //     props.newComponent(props.index, props.toolslug, props.component.category)
    // }

    function isolateComponents() {
        return category.map(component => {
        return <td>{component.name}</td>
        })
    }


    return (
        isolateComponents()
    )
}


export default ToolData;