import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import createicon from '../../img/create-icon.png'

export default function CreateIcon() {
  return (
    <LinkStyled
      activeClassName="selected"
      exact
      to="/create"
      data-cy="create_icon"
    >
      <img src={createicon} alt="" />
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
