import React from 'react'
import ReactDOM from 'react-dom'
import Headline from './Headline'

test('renders Headline', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Headline>Headline</Headline>, container)
  expect(container.textContent).toBe('Headline')
})

test('renders Headline', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Headline>Eure neuen Freunde</Headline>, container)
  expect(container.textContent).toBe('Eure neuen Freunde')
})

test('renders Headline', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Headline>Hundeplätze</Headline>, container)
  expect(container.textContent).toBe('Hundeplätze')
})
