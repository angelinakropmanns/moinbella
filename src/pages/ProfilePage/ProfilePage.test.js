import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import ProfilePage from './ProfilePage'

test('rendering Profile Page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )
  const linkElement = getByText(/Bulldogge/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering Profile Page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )
  const linkElement = getByText(/Shiba Inu/i)
  expect(linkElement).toBeInTheDocument()
})
