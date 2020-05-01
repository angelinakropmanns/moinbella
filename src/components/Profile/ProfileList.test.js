import React from 'react'
import {render} from '@testing-library/react'
import ProfileList from './ProfileList'

test('rendering Profile List', () => {
    const { getByText } = render(<ProfileList />)
    const linkElement = getByText(/Bulldogge/i)
    expect(linkElement).toBeInTheDocument()
})

test('rendering Profile List', () => {
    const { getByText } = render(<ProfileList />)
    const linkElement = getByText(/Shiba Inu/i)
    expect(linkElement).toBeInTheDocument()
})