import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import todoApp from './reducers'

import './css/main.css'

const store = createStore(todoApp)

const rootElement = document.querySelector('#root')

render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)