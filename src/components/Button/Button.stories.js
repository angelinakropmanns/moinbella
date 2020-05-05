import React from 'react'
import Button from './Button'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const ButtonTesting = () => {
  return <Button>{text('Children', 'Button')}</Button>
}
