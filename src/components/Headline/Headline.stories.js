import React from 'react'
import Headline from './Headline'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Headline',
  component: Headline,
  decorators: [withKnobs],
}

export const HeadlineTesting = () => {
  return <Headline>{text('Children', 'Headline')}</Headline>
}
