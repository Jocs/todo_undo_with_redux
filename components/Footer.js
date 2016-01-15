import React, { Component, PropTypes } from 'react'
import { visibleFilter } from '../actions'

const { SHOW_ALL, SHOW_COMPLITED, SHOW_ACTIVE } = visibleFilter
class Footer extends Component {
	renderFilter(filter, name) {
		if(filter === this.props.filter)
			return name
		return (
			<a href='#' onClick={() => this.props.onSetFilter(filter)}>{name}</a>
		)
	}
	render() {
		const {undo, redo, undoDisable, redoDisable } = this.props
		return(
			<div>
				<ul className='footer-item'>
					<li>{this.renderFilter(SHOW_ALL, SHOW_ALL)}</li>
					<li>{this.renderFilter(SHOW_COMPLITED, SHOW_COMPLITED)}</li>
					<li>{this.renderFilter(SHOW_ACTIVE, SHOW_ACTIVE)}</li>
				</ul>
				<button onClick={() => undo()} disabled={undoDisable}>UNDO</button>
				<button onClick={() => redo()} disabled={redoDisable}>UNDO</button>
			</div>
		)
	}
}

Footer.propTypes = {
	filter: PropTypes.string.isRequired,
	onSetFilter: PropTypes.func.isRequired,
	undo: PropTypes.func.isRequired,
	redo: PropTypes.func.isRequired,
	undoDisable: PropTypes.bool.isRequired,
	redoDisable: PropTypes.bool.isRequired
}

export default Footer
