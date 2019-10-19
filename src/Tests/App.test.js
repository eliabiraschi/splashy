import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import App from '../App'

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
