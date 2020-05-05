import React from 'react'
import styled from 'styled-components/macro'
import logo from '../img/logo.png'
import defaultprofilepicture from '../img/default-profile-picture.png'
import ProfileIcon from '../components/ProfileIcon/ProfileIcon'
import CreateIcon from '../components/CreateIcon/CreateIcon'

export default function StartPage() {
  return (
    <StartPageStyled>
      <TitleStyled>
        <img src={logo} alt="Moin Bella!" />
      </TitleStyled>
      <ImageStyled>
        <img src={defaultprofilepicture} alt="sitting bulldog puppy" />
      </ImageStyled>
      <ProfileIconStyled>
        <ProfileIcon />
        <span>Profile</span>
      </ProfileIconStyled>
      <CreateIconStyled>
        <CreateIcon />
        <span>Profil erstellen</span>
      </CreateIconStyled>
    </StartPageStyled>
  )
}

const StartPageStyled = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr;
`

const TitleStyled = styled.h1`
  margin-top: 48px;
  grid-column: 1/3;
  grid-row: 1/2;
  img {
    width: 320px;
    height: auto;
  }
`

const ImageStyled = styled.section`
  grid-column: 1/3;
  grid-row: 2/3;
  img {
    width: 240px;
    height: auto;
  }
`

const ProfileIconStyled = styled.section`
  grid-column: 2/3;
  grid-row: 3/4;
  width: 60px;
  height: 60px;
  margin-top: 8px;
  margin-left: 68px;
`

const CreateIconStyled = styled.section`
  grid-column: 1/2;
  grid-row: 3/4;
  width: 44px;
  height: 44px;
  margin-top: 12px;
  margin-left: 60px;
`
