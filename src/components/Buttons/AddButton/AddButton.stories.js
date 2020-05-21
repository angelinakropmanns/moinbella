import React from 'react'
import AddButton from './AddButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'AddButton',
  component: AddButton,
  decorators: [withKnobs],
}

export const SimpleAddButton = () => {
  return <AddButton>{text('Children', 'Add')}</AddButton>
}
