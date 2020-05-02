import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import defaultprofilepicture from '../../img/default-profile-picture.png'


Profile.propTypes = {
    name: PropTypes.string,
    mail: PropTypes.string,
    plz: PropTypes.number,
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
    onClick,
    isHidden
}) {
    return (
        <>
        <ProfileStyled onClick={onClick}>
            <img src={defaultprofilepicture} alt="sitting bulldog puppy"/>
            <ProfileMainStyled>
                <ProfileTitleStyled>
                    {name}
                </ProfileTitleStyled>
                    {mail}<br /> 
                    {plz} {city}<br />
                    Mein Hund ist: {gender}<br />
                    Rasse: {breed}<br />
            </ProfileMainStyled>
            {isHidden || 
                <ArrowStyled>
                    &darr;
                </ArrowStyled>
            }
            {isHidden && (
                <>
                    <p className="about">Über uns: <br />{about}</p>
                    <p className="search">Wonach wir suchen: <br />{search}</p>
                    <ArrowStyled>
                        &uarr;
                    </ArrowStyled>
                </>
                )
        }
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
    margin-top: 0px;
    margin-bottom: 4px;
}
img {
    width: 100%;
    height: auto;
}
.about {
    grid-column: 1/3;
    margin-top: 12px;
    margin-bottom: 32px;
}
.search {
    grid-column: 1/3;
}
`

const ProfileTitleStyled = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const ProfileMainStyled = styled.span`
    margin-bottom: 20px;
    margin-left: 12px;
    line-height: 1.5;
    font-size: 16px;
`

const ArrowStyled = styled.span`
    grid-column: 2/3;
    text-align: right;
`