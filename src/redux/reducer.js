// import { combineReducers } from 'redux'
// import filterReducer from '../components/Filters/FilterSlice'
// import todoReducer from '../components/TodoList/TodoSlice'

// Cách 1
// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }


// Cách 2 : combine => kết hợp
// const rootReducer = combineReducers({
//     filter: filterReducer,
//     todoList: todoReducer
// })
// export default rootReducer