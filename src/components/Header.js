import React from 'react'
import styled from 'styled-components/macro'
import logo from '../img/logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Moin Bella!" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  item-align: center;
  height: 48px;
  margin-bottom: 20px;
  img {
    max-height: 100%;
    width: auto;
  }
`
