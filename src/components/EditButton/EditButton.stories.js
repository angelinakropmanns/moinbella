import React from 'react'
import EditButton from './EditButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'EditButton',
  component: EditButton,
  decorators: [withKnobs],
}

export const SimpleEditButton = () => {
  return <EditButton>{text('Children', 'Edit')}</EditButton>
}
