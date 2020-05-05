import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import profilesicon from '../../img/profiles-icon.svg'

export default function ProfileIcon() {
  return (
    <LinkStyled activeClassName="selected" exact to="/profiles">
      <img src={profilesicon} alt="" />
      <br />
    </LinkStyled>
  )
}

const LinkStyled = styled(NavLink)`
  display: flex;
`
