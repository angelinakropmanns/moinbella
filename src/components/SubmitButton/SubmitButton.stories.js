import React from 'react'
import SubmitButton from './SubmitButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'SubmitButton',
  component: SubmitButton,
  decorators: [withKnobs],
}

export const SimpleSubmitButton = () => {
  return <SubmitButton>{text('Children', 'Button')}</SubmitButton>
}
