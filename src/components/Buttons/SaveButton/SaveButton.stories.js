import React from 'react'
import SaveButton from './SaveButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'SaveButton',
  component: SaveButton,
  decorators: [withKnobs],
}

export const SimpleSaveButton = () => {
  return <SaveButton>{text('Children', 'Save')}</SaveButton>
}
