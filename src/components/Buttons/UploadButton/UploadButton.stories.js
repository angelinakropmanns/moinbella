import React from 'react'
import UploadButton from './UploadButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'UploadButton',
  component: UploadButton,
  decorators: [withKnobs],
}

export const SimpleUploadButton = () => {
  return <UploadButton>{text('Children', 'Upload')}</UploadButton>
}
