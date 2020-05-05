import React from 'react'
import styled from 'styled-components/macro'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import MapsIcon from '../MapsIcon/MapsIcon'

export default function Navigation() {
  return (
    <NavigationStyled>
      <ProfileIconStyled>
        <ProfileIcon />
      </ProfileIconStyled>
      <MapsIconStyled>
        <MapsIcon />
      </MapsIconStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #aed6dc;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
  margin-right: 0;
  margin-left: 0;
  height: 48px;
`

const ProfileIconStyled = styled.span`
  height: 48px;
  width: 48px;
`

const MapsIconStyled = styled.span`
  height: 36px;
  width: 36px;
  margin-top: 4px;
`
