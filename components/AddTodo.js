import React, { Component, PropTypes } from 'react'

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}
	handleSubmit(e) {
		e.preventDefault()
		this.props.onAddTodoClick(this.state.text)
		this.setState({text: ''})
	}
	render() {
		return (
			<form onSubmit={e => this.handleSubmit(e)}>
				<input 
					value={this.state.text}
					type='text'
					placeholder='输入待办事项...'
					onChange={e => this.setState({text: e.target.value.trim()})}
				/>
				<button type='submit'>ADD</button>
			</form>
		)
	}
}

AddTodo.propTypes = {
	onAddTodoClick: PropTypes.func.isRequired
}

export default AddTodo