const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}


export default addTodo 