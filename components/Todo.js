import React, { Component, PropTypes } from 'react'

class Todo extends Component {
	render() {
		const { text, onClick, complited } = this.props
		return(
			<li
				className='todo-item'
				onClick={onClick}
				style={{
					opacity: complited? 0.5: 1,
					cursor: complited? 'default': 'pointer'
				}}
			>
				{text}
			</li>
		)
	}
}

Todo.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	complited: PropTypes.bool.isRequired
}

export default Todo