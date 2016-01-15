import { ADD_TODO, COMPLITE_TODO, SET_VISIBLE_FILTER, visibleFilter } from '../actions'
import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'


const { SHOW_ALL } = visibleFilter

function setFilter(state = SHOW_ALL, action) {
	switch(action.type) {
		case SET_VISIBLE_FILTER:
			return action.filter
		default: 
			return state
	}
}

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO: 
			return [
				...state,
				todo(undefined, action)
			]
		case COMPLITE_TODO:
			return state.map(t => todo(t, action))
		default: 
			return state
	}
}

function todo(state, action) {
	switch(action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				complited: false
			}
		case COMPLITE_TODO:
			if (state.id !== action.id) 
				return state
			return {
				...state,
				complited: !state.complited
			}
		default: 
			return state
	}
}

const todoApp = combineReducers({
	visibleFilter: setFilter,
	todos: undoable(todos, {filter: distinctState()})
})

export default todoApp



