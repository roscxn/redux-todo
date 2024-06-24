import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { todosReducer } from "./todos/reducers"
import { goalsReducer } from "./goals/reducers"

const rootReducer = combineReducers({
  todos: todosReducer,
  goals: goalsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
