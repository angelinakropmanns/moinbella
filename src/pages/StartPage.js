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
      <IconContainerStyled>
        <ProfileIconStyled>
          <ProfileIcon />
        </ProfileIconStyled>
        <TextProfileStyled>Profile</TextProfileStyled>
        <CreateIconStyled>
          <CreateIcon />
        </CreateIconStyled>
        <TextMapsStyled>Profil erstellen</TextMapsStyled>
      </IconContainerStyled>
    </StartPageStyled>
  )
}

const StartPageStyled = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr;
`

const TitleStyled = styled.h1`
  margin-top: 28px;
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
  margin: 20px 0 20px 0;
  img {
    width: 240px;
    height: auto;
  }
`

const IconContainerStyled = styled.section`
  grid-column: 1/3;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr;
  width: 240px;
  height: auto;
  margin: 0 auto 0 auto;
`

const ProfileIconStyled = styled.section`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;
  margin: 12px 32px 0 0;
`

const CreateIconStyled = styled.section`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: start;
  margin: 12px 0 0 32px;
`

const TextProfileStyled = styled.span`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  margin-right: 32px;
`

const TextMapsStyled = styled.span`
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: start;
`
