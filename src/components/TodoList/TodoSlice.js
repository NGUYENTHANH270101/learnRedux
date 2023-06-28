// const initState = [
//     { id: '1', name: 'learn Database', completed: true, priority: 'medium' },
//     { id: '2', name: 'learn HTML', completed: false, priority: 'hight' },
//     { id: '3', name: 'learn CSS', completed: false, priority: 'low' }

// ]

// const todoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleStatus':
//             return state.map((todo) => todo.id === action.payload
//                 ? { ...todo, completed: !todo.completed }
//                 : todo)
//         default:
//             return state

//     }
// }

// export default todoReducer

import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: '1', name: 'learn Database', completed: true, priority: 'medium' },
        { id: '2', name: 'learn HTML', completed: false, priority: 'hight' },
        { id: '3', name: 'learn CSS', completed: false, priority: 'low' }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload) // trả về 1 object mong muốn => {} còn filter trả về 1 Array chứa nhiều object [{abc:'text}, {bcd:'text2'}]
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }

})

export default todoSlice