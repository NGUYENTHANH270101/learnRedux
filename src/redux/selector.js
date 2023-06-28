
// Cách 1

// const todoSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search)
//     })
//     return todoRemaining
// }

// Cách 2
import { createSelector } from 'reselect'
const todoSelector = (state) => state.todoList
const searchTextSelector = (state) => state.filter.search
const filterStatusSelector = (state) => state.filter.status
const filterPrioritySelector = (state) => state.filter.priorities
// reselector tối ưu code 
// khi có 1 selector phụ thuộc vào selector khác thì truyền vào làm tham số của createSelector
// createSelector nhận tham số phụ thuộc vào (các selector phụ thuộc vào nhau) và 1 callback nhận các giá trị của selector
const todoRemainingSelector = createSelector(todoSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritySelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {

                return todo.name.includes(searchText)
            }
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed)
            )
        })
    })
export default todoRemainingSelector