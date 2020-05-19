import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import maps from '../../img/maps-icon.png'

export default function MapsIcon() {
  return (
    <LinkStyled activeClassName="selected" to="/maps" data-cy="maps_icon">
      <img src={maps} alt="maps" />
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
