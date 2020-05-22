import React from 'react'
import styled from 'styled-components/macro'

export default function RandomDogText() {
  const texts = [
    'Ein Leben ohne Hund ist ein Irrtum!',
    'Der Hund ist der sechste Sinn des Menschen.',
    'Ein Hund ist wie ein Herz auf vier Beinen.',
    'Natürlich kann man ohne Hund leben es – lohnt sich nur nicht.',
    'Gib dem Menschen einen Hund und seine Seele wird gesund.',
    'Egal wie wenig Geld und Besitz du hast, einen Hund zu haben, macht dich reich.',
    'Eines Hundes Treue währt ein ganzes Leben lang.',
    'Lass den Hund bellen, singen kann er nicht.',
  ]

  let randomText = texts[Math.floor(Math.random() * texts.length)]

  return <TextStyled>"{randomText}"</TextStyled>
}

const TextStyled = styled.p`
  font-size: 20px;
  font-style: italic;
`
