import  todos from './Todos'
import  VISIBILITY_FILTERS from './Visibility'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
    VISIBILITY_FILTERS,
  todos
})

export default todoApp
