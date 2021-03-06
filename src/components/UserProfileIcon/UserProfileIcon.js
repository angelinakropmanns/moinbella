import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import userprofile from '../../icons/userprofile-icon.png'

export default function UserProfileIcon() {
  return (
    <LinkStyled
      activeClassName="selected"
      to="/user-profile"
      data-cy="userprofile_icon"
    >
      <img src={userprofile} alt="user profil" />
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
