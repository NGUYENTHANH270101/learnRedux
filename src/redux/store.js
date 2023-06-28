
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore } from 'redux'
// import rootReducer from './reducer'
// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/FilterSlice'
import todoSlice from '../components/TodoList/TodoSlice'

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoSlice.reducer
    },

})

export default store