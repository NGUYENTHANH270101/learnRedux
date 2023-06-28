
// const initState = {
//     search: '',
//     status: 'All',
//     priority: []

// }

// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload

//             }

//         case 'filter/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         case 'filter/priorityChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state

//     }
// }

// export default filterReducer

import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // Có thể viết mutation(truyền trục tiếp) nhưng lại là imutation vì redux/toolkit đã hỗ trợ 
            state.search = action.payload
        },//=> {type:''filter/searchFilterChange}
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityChange: (state, action) => {
            state.priority = action.payload
        }
    }


})

export default filterSlice