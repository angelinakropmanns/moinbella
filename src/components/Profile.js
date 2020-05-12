import React from 'react'
import PropTypes from 'prop-types'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components/macro'
import defaultprofilepicture from '../img/default-profile-picture.png'

Profile.propTypes = {
  name: PropTypes.string,
  mail: PropTypes.string,
  plz: PropTypes.string,
  city: PropTypes.string,
  gender: PropTypes.string,
  breed: PropTypes.string,
  about: PropTypes.string,
  search: PropTypes.string,
}

export default function Profile({
  name,
  mail,
  plz,
  city,
  gender,
  breed,
  about,
  search,
  image,
}) {
  const { on, toggle } = useToggle(false)
  return (
    <>
      <ProfileStyled onClick={toggle}>
        <img src={image} alt="" />
        <ProfileMainStyled>
          <ProfileTitleStyled data-cy="profile_name">
            {name}
            <br />
          </ProfileTitleStyled>
          {mail}
          <br />
          <span data-cy="profile_plz">{plz}</span> {city}
          <br />
          Mein Hund ist: {gender}
          <br />
          Rasse: {breed}
          <br />
        </ProfileMainStyled>
        {on || <ArrowStyled>&darr;</ArrowStyled>}
        {on && (
          <>
            <p className="about">
              Über uns: <br />
              {about}
            </p>
            <p className="search">
              Wonach wir suchen: <br />
              {search}
            </p>
            <ArrowStyled>&uarr;</ArrowStyled>
          </>
        )}
      </ProfileStyled>
    </>
  )
}

const ProfileStyled = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  background: #c1e1e6;
  text-align: left;
  line-height: 1.5;
  margin: 12px 4px 32px 4px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  p {
    margin: 0 0 4px 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  .about {
    grid-column: 1/3;
    margin: 12px 0 32px 0;
  }
  .search {
    grid-column: 1/3;
  }
`

const ProfileTitleStyled = styled.span`
  font-weight: bold;
  font-size: 20px;
`

const ProfileMainStyled = styled.span`
  margin: 0 0 20px 12px;
  line-height: 1.5;
  font-size: 16px;
`

const ArrowStyled = styled.span`
  grid-column: 2/3;
  text-align: right;
`
