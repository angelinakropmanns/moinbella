import React from 'react'
import styled from 'styled-components/macro'
import logo from '../img/logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="moin bella" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  item-align: center;
  height: 48px;
  margin: 12px 0 20px 0;
  img {
    max-height: 100%;
    width: auto;
  }
`
