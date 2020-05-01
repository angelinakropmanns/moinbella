import React from 'react'
import ReactDOM from 'react-dom'
import ProfileList from './ProfileList'

test('renders name', () => {
  const container = document.createElement('div')
  ReactDOM.render(<ProfileList name="Angelina Tobi"/>, container)
  expect(container.textContent).toBe('Angelina Tobi')
})

