import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './action'

const { SHOW_ALL } = VisibilityFilters;


// function的name作为state对应状态的Key
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    
      case TOGGLE_TODO:
        let newState = state.map((todo, index) => {
          if (index === action.index) {
            return {...todo, completed: !todo.completed}
          }
          return todo
        })
        console.log('[newState]', newState)
        return newState

      default:
        return state
  }
}

const todoApp = combineReducers({visibilityFilter, todos})

export default todoApp