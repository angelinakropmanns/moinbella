import React from 'react'
import styled from 'styled-components/macro'
import CreateIcon from '../CreateIcon/CreateIcon'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import MapsIcon from '../MapsIcon/MapsIcon'

export default function Navigation() {
  return (
    <NavigationStyled>
      <CreateIconStyled>
        <CreateIcon />
      </CreateIconStyled>
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
  margin: 0;
`

const CreateIconStyled = styled.span`
  margin-top: 4px;
`

const ProfileIconStyled = styled.span`
  margin-top: 4px;
`

const MapsIconStyled = styled.span`
  margin-top: 4px;
`
