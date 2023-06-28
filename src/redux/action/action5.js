const toggleStatus = (todoId) => {
    return {
        type: 'todoList/toggleStatus',
        payload: todoId
    }
}
export default toggleStatus