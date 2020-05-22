import React from 'react'
import ButtonToTop from './ButtonToTop'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'ButtonToTop',
  component: ButtonToTop,
  decorators: [withKnobs],
}

export const SimpleButtonToTop = () => {
  return <ButtonToTop>{text('Children', 'Top')}</ButtonToTop>
}
