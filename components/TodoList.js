import React, {Component, PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends Component {
	render() {
		const { todos, onTodoClick } = this.props
		return (
			<ul>
				{todos.map(todo => <Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
					/>)}
			</ul>
		)
	}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		complited: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList