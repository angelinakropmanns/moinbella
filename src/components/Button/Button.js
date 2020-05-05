import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ children }) {
  return <ButtonStyled type="submit">{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 28px;
  width: 96px;
  margin-left: auto;
  margin-right: auto;
  background: #ff9a8d;
  border-radius: 8px;
  border: 28px;
`
