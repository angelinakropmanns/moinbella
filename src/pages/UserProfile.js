import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { useToggle } from 'react-hooks-lib'
import EditButton from '../components/Buttons/EditButton/EditButton'
import SaveButton from '../components/Buttons/SaveButton/SaveButton'
import CloseButton from '../components/Buttons/CloseButton/CloseButton'
import styled from 'styled-components/macro'
import swal from 'sweetalert'

export default function UserProfile({ user, setUser }) {
  const [breed, setBreed] = useState('')
  const [plz, setPlz] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')
  const [about, setAbout] = useState('')
  const [search, setSearch] = useState('')

  const activeUser = localStorage.getItem('uid')

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }))
      setUser(users)
    })
  }, [setUser])

  const { on, toggle } = useToggle(false)

  let singleUser = user && user.filter((user) => user.id === activeUser)[0]

  return (
    <main>
      {singleUser && (
        <>
          <ProfileTitleStyled>Moin {singleUser.name}!</ProfileTitleStyled>
          <ImageStyled src={singleUser.image} alt="" />
          {on || (
            <EditButtonStyled onClick={toggle}>
              <EditButton>Profil Bearbeiten</EditButton>
            </EditButtonStyled>
          )}
          {on && (
            <CloseButtonStyled onClick={toggle}>
              <CloseButton>Fertig!</CloseButton>
            </CloseButtonStyled>
          )}
          <ProfileWrapper>
            <TitleStyled>Deine Mail-Adresse:</TitleStyled>
            <DescriptionStyled>{singleUser.email}</DescriptionStyled>

            <TitleStyled>Deine Postleitzahl:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.plz}</DescriptionStyled>}
            {on && (
              <>
                <InputStyled
                  id="plz"
                  type="text"
                  name="plz"
                  value={plz}
                  onChange={(event) => setPlz(event.target.value)}
                />
                <SaveButton
                  onClick={() => changeInformation(singleUser, 'plz', plz)}
                >
                  Speichern
                </SaveButton>
              </>
            )}

            <TitleStyled>Dein Wohnort:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.city}</DescriptionStyled>}
            {on && (
              <>
                <InputStyled
                  id="city"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
                <SaveButton
                  onClick={() => changeInformation(singleUser, 'city', city)}
                >
                  Speichern
                </SaveButton>
              </>
            )}

            <TitleStyled>Das Geschlecht deines Hundes:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.gender}</DescriptionStyled>}
            {on && (
              <>
                <InputStyled
                  id="gender"
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                />
                <SaveButton
                  onClick={() =>
                    changeInformation(singleUser, 'gender', gender)
                  }
                >
                  Speichern
                </SaveButton>
              </>
            )}
            <TitleStyled>Die Rasse deines Hundes:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.breed}</DescriptionStyled>}
            {on && (
              <>
                <InputStyled
                  id="breed"
                  type="text"
                  name="breed"
                  value={breed}
                  onChange={(event) => setBreed(event.target.value)}
                />
                <SaveButton
                  onClick={() => changeInformation(singleUser, 'breed', breed)}
                >
                  Speichern
                </SaveButton>
              </>
            )}
            <TitleStyled>Über euch:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.about}</DescriptionStyled>}
            {on && (
              <>
                <LongInputStyled
                  id="about"
                  type="text"
                  name="about"
                  value={about}
                  onChange={(event) => setAbout(event.target.value)}
                />
                <SaveButton
                  onClick={() => changeInformation(singleUser, 'about', about)}
                >
                  Speichern
                </SaveButton>
              </>
            )}
            <TitleStyled>Wonach ihr sucht:</TitleStyled>
            {on || <DescriptionStyled>{singleUser.search}</DescriptionStyled>}
            {on && (
              <>
                <LongInputStyled
                  id="search"
                  type="text"
                  name="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <SaveButton
                  onClick={() =>
                    changeInformation(singleUser, 'search', search)
                  }
                >
                  Speichern
                </SaveButton>
              </>
            )}
          </ProfileWrapper>
        </>
      )}
    </main>
  )
  function changeInformation(singleUser, key, value) {
    db.collection('users')
      .doc(singleUser.id)
      .update({ [key]: value })
      .then(() => {})
      .catch((err) =>
        swal({
          title: 'Das hat leider nicht funktioniert.',
          text: 'Versuche es bitte später erneut.',
          icon: 'error',
        })
      )
    swal({
      title: 'Deine Änderung wurde gespeichert!',
      text:
        'Klicke auf "Fertig!" um die Bearbeitung zu beenden oder bearbeite weitere Infos!',
      icon: 'success',
    })
  }
}

const ProfileTitleStyled = styled.p`
  font-size: 24px;
`

const ImageStyled = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 12px;
`

const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 12px 24px 12px;
  textarea:focus,
  input:focus {
    outline: none;
    border: 1px solid var(--secondary);
  }
`

const TitleStyled = styled.p`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
`

const DescriptionStyled = styled.p`
  margin: 0;
  text-align: left;
`

const EditButtonStyled = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-left: 12px;
`

const CloseButtonStyled = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
`

const InputStyled = styled.input`
  height: 32px;
  width: 98%;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 4px 0 12px 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background: var(--quaternary);
`

const LongInputStyled = styled.textarea`
  height: 80px;
  width: 98%;
  border: 0;
  border-radius: 2px;
  padding-top: 12px;
  padding-left: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 4px 0 12px 0;
  background: var(--quaternary);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`
