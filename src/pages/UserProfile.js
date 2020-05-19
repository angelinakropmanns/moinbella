import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import styled from 'styled-components/macro'

export default function UserProfile() {
  const [user, setUser] = useState('')

  const activeUser = localStorage.getItem('uid')

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }))
      setUser(users)
    })
  }, [])

  let singleUser = user && user.filter((user) => user.id === activeUser)[0]

  return (
    <main>
      {singleUser && (
        <>
          <ProfileTitleStyled>Moin {singleUser.name}!</ProfileTitleStyled>
          <ProfileWrapper>
            <TitleStyled>Deine Mail-Adresse: </TitleStyled>
            <DescriptionStyled>{singleUser.email}</DescriptionStyled>
            <TitleStyled>Dein Wohnort:</TitleStyled>
            <DescriptionStyled>
              {singleUser.plz} {singleUser.city}
            </DescriptionStyled>
            <TitleStyled>Das Geschlecht deines Hundes:</TitleStyled>
            <DescriptionStyled>{singleUser.gender}</DescriptionStyled>
            <TitleStyled>Die Rasse deines Hundes:</TitleStyled>
            <DescriptionStyled>{singleUser.breed}</DescriptionStyled>
            <TitleStyled>Über euch:</TitleStyled>
            <DescriptionStyled>{singleUser.about}</DescriptionStyled>
            <TitleStyled>Wonach ihr sucht:</TitleStyled>
            <DescriptionStyled>{singleUser.about}</DescriptionStyled>
          </ProfileWrapper>
        </>
      )}
    </main>
  )
}

const ProfileTitleStyled = styled.p`
  font-size: 24px;
`

const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px 0 12px;
  p {
    line-height: 0.5;
  }
`

const TitleStyled = styled.p`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
`

const DescriptionStyled = styled.p`
  margin-top: 4px;
`
