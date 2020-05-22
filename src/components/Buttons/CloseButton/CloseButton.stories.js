import React from 'react'
import CloseButton from './CloseButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'CloseButton',
  component: CloseButton,
  decorators: [withKnobs],
}

export const SimpleCloseButton = () => {
  return <CloseButton>{text('Children', 'Close')}</CloseButton>
}
