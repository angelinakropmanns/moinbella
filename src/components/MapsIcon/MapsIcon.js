import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import mapsicon from '../../img/maps-icon.png'

export default function MapsIcon() {
  return (
    <LinkStyled activeClassName="selected" exact to="/maps">
      <img src={mapsicon} alt="" />
      <br />
    </LinkStyled>
  )
}

const LinkStyled = styled(NavLink)`
  display: flex;
  &.selected {
    filter: invert(100%);
  }
`
