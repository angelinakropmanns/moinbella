import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

test('renders Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Button>Button</Button>, container)
  expect(container.textContent).toBe('Button')
})

test('renders Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Button>Los gehts!</Button>, container)
  expect(container.textContent).toBe('Los gehts!')
})

test('renders Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Button>Submit</Button>, container)
  expect(container.textContent).toBe('Submit')
})
