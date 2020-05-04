import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import ProfileList from './ProfileList'

test('rendering Profile List', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProfileList />
    </MemoryRouter>
  )
  const linkElement = getByText(/Bulldogge/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering Profile List', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProfileList />
    </MemoryRouter>
  )
  const linkElement = getByText(/Shiba Inu/i)
  expect(linkElement).toBeInTheDocument()
})
