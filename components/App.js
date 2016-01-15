import React, { Component, PropTypes } from 'react'
import { ActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { addTodo, compliteTodo, setVisibleFilter, visibleFilter } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const { SHOW_ALL, SHOW_COMPLITED, SHOW_ACTIVE } = visibleFilter


class App extends Component {
	render() {
		const {todos, filter, dispatch, undoDisable, redoDisable } = this.props

		return (
			<div>
				<AddTodo
					onAddTodoClick={text => dispatch(addTodo(text))}
				/>
				<TodoList
					todos={todos}
					onTodoClick={id => dispatch(compliteTodo(id))}
				/>
				<Footer
					filter={filter}
					onSetFilter={filter => dispatch(setVisibleFilter(filter))}
					undo={() => dispatch(ActionCreators.undo())}
					redo={() => dispatch(ActionCreators.redo())}
					undoDisable={undoDisable}
					redoDisable={redoDisable}
				/>
			</div>
		)
	}
}

App.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		complited: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLITED',
		'SHOW_ACTIVE'
		]).isRequired,
	dispatch: PropTypes.func.isRequired,
	undoDisable: PropTypes.bool.isRequired,
	redoDisable: PropTypes.bool.isRequired
}

function select(state, filter) {
	switch (filter) {
		case SHOW_ALL:
			return state
		case SHOW_COMPLITED:
			return state.filter(t => t.complited)
		case SHOW_ACTIVE:
			return state.filter(t => !t.complited)
		default:
			return state
	}
}

function mapStateToProps(state) {
	return {
		todos: select(state.todos.present, state.visibleFilter),
		filter: state.visibleFilter,
		undoDisable: state.todos.past.length === 0,
		redoDisable: state.todos.future.length === 0
	}
}

export default connect(mapStateToProps)(App)







