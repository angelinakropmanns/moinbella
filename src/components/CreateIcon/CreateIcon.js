import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import create from '../../img/create-icon.png'

export default function CreateIcon() {
  return (
    <LinkStyled
      activeClassName="selected"
      exact
      to="/create-profile"
      data-cy="create_icon"
    >
      <img src={create} alt="create" />
      <br />
    </LinkStyled>
  )
}

const LinkStyled = styled(NavLink)`
  display: flex;
  img {
    height: 40px;
    width: auto;
  }
  &.selected {
    filter: invert(50%);
  }
`
