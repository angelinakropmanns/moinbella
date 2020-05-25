import React from 'react'
import styled from 'styled-components/macro'
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import MapsIcon from '../MapsIcon/MapsIcon'

export default function Navigation() {
  return (
    <NavigationStyled>
      <UserProfileIconStyled>
        <UserProfileIcon />
      </UserProfileIconStyled>
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
  background: var(--background);

  margin: 0;
`

const UserProfileIconStyled = styled.span`
  margin-top: 4px;
`

const ProfileIconStyled = styled.span`
  margin-top: 4px;
`

const MapsIconStyled = styled.span`
  margin-top: 4px;
`
