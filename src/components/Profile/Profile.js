import React from 'react'
import styled from 'styled-components/macro'
import defaultprofilepicture from '../../img/default-profile-picture.png'

export default function Profile({
    name,
    mail, 
    plz,
    city,
    gender,
    rasse,
    about, 
    search
}) {
    return (
        <>
        <ProfileStyled>
            <img src={defaultprofilepicture} alt="Cute bulldog puppy"/>
            <span className="profileMain"><p className="profileTitle">{name}</p>
            {mail}<br /> 
            {plz} {city}<br />
            Mein Hund ist: {gender}<br />
            Rasse: {rasse}<br />
            </span>
            <p className="about">Über uns: <br />{about}</p>
            <p className="search">Nach was wir suchen: <br />{search}</p>
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
margin: 10px 5px 30px 5px;
padding: 10px;
border-radius: 8px;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
p {
    margin-top: 0px;
    margin-bottom: 3px;
}
img {
    max-width:100%;
    height:auto;
}
.profileMain {
    margin-bottom: 20px;
    margin-left: 10px;
    line-height: 1.5;
    font-size: 16px;
}
.profileTitle {
    font-weight: bold;
    font-size: 20px;
}
.about {
    grid-column: 1/3;
    margin-bottom: 25px;
}
.search {
    grid-column: 1/3;
}
`



