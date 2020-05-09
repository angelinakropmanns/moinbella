import React from 'react'
import ReactDOM from 'react-dom'
import SubmitButton from './SubmitButton'

test('renders Submit Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<SubmitButton>Button</SubmitButton>, container)
  expect(container.textContent).toBe('Button')
})

test('renders Submit Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<SubmitButton>Los gehts!</SubmitButton>, container)
  expect(container.textContent).toBe('Los gehts!')
})

test('renders Submit Button', () => {
  const container = document.createElement('div')
  ReactDOM.render(<SubmitButton>Submit</SubmitButton>, container)
  expect(container.textContent).toBe('Submit')
})
