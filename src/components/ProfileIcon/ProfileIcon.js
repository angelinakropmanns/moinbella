import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import profiles from '../../img/profiles-icon.png'

export default function ProfileIcon() {
  return (
    <LinkStyled
      activeClassName="selected"
      to="/profiles"
      data-cy="profile_icon"
    >
      <img src={profiles} alt="profile" />
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
