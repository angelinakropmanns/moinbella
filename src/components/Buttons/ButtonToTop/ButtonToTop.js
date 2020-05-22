import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import styled from 'styled-components/macro'

export default function ButtonToTop() {
  return (
    <ButtonStyled>
      <ArrowStyled />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  color: var(--secondary);
  background: var(--primary);
  border-radius: 50%;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`

const ArrowStyled = styled(AiOutlineArrowUp)`
  height: 20px;
  width: 20px;
`
