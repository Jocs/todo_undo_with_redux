export const ADD_TODO = 'ADD_TODO'
export const COMPLITE_TODO = 'COMPLITE_TODO'
export const SET_VISIBLE_FILTER = 'SET_VISIBLE_FILTER'
export const visibleFilter = {
							SHOW_ALL: 'SHOW_ALL',
							SHOW_COMPLITED: 'SHOW_COMPLITED',
							SHOW_ACTIVE: 'SHOW_ACTIVE'
						}

let uniqueId = 0

export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: uniqueId++,
		text
	}
}

export function compliteTodo(id) {
	return {
		type: COMPLITE_TODO,
		id
	}
}

export function setVisibleFilter(filter) {
	return {
		type: SET_VISIBLE_FILTER,
		filter
	}
}