import TodoItem from "./TodoItem";

function TodoList() {
    const todos = [
        {
            id: 1,
            name: 'fucking todo 1'
        },
        {
            id: 2,
            name: 'fucking todo 2'
        },
        {
            id: 3,
            name: 'fucking todo 3'
        },
    ]
    return (
        <>
            {
                todos.map(item => <TodoItem key={item.id} item={item}/>)
            }
        </>
    )
}

export default TodoList;