function TodoItem(props) {
    const {item} = props;
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}

export default TodoItem;