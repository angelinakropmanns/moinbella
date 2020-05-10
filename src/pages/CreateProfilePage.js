import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import { db } from '../Firebase'
import styled from 'styled-components/macro'
import Headline from '../components/Headline/Headline'
import SubmitButton from '../components/SubmitButton/SubmitButton'

export default function CreateProfilePage() {
  const [user, setUser] = useState({
    name: '',
    mail: '',
    plz: '',
    city: '',
    gender: '',
    breed: '',
    about: '',
    search: '',
  })

  const { on, toggle } = useToggle(false)

  return (
    <main>
      <Headline>Profil erstellen</Headline>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="name">Name*:</label>

        <InputStyled
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          placeholder="Dein Name"
          required
        />
        <label htmlFor="mail">E-Mail*:</label>

        <InputStyled
          id="mail"
          name="mail"
          type="email"
          value={user.mail}
          onChange={handleChange}
          placeholder="z.B. beispiel@beispiel.com"
          required
        />
        <label htmlFor="plz">Postleitzahl*:</label>

        <InputStyled
          id="plz"
          name="plz"
          type="text"
          value={user.plz}
          onChange={handleChange}
          placeholder="z.B. 20535"
          required
        />

        <label htmlFor="city">Ort*:</label>

        <InputStyled
          id="city"
          name="city"
          type="text"
          value={user.city}
          onChange={handleChange}
          placeholder="z.B. Hamburg"
          required
        />

        <label htmlFor="gender">Geschlecht deines Hundes*:</label>

        <InputStyled
          id="gender"
          name="gender"
          type="text"
          value={user.gender}
          onChange={handleChange}
          placeholder="z.B. weiblich"
          required
        />
        <label htmlFor="breed">Hunderasse*:</label>
        <InputStyled
          id="breed"
          name="breed"
          type="text"
          value={user.breed}
          onChange={handleChange}
          placeholder="z.B. Bulldogge"
          required
        />
        {on || (
          <FormTextStyled onClick={toggle}>
            Erweitertes Profil anlegen
          </FormTextStyled>
        )}
        {on && (
          <>
            <label htmlFor="about">Über uns:</label>
            <LongInputStyled
              id="about"
              name="about"
              type="text"
              value={user.about}
              onChange={handleChange}
              placeholder="Z.B. der Name deines Hundes, was ihr gerne macht..."
            />
            <label htmlFor="search">Wonach wir suchen:</label>
            <LongInputStyled
              id="search"
              name="search"
              type="text"
              value={user.search}
              onChange={handleChange}
              placeholder="Wonach ihr sucht, z.B. regelmäßige Treffen..."
            />
          </>
        )}
        <SubmitButtonStyled>
          <SubmitButton>Los geht's!</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
    </main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    db.collection('users').add(user)
    setUser({
      name: '',
      mail: '',
      plz: '',
      city: '',
      gender: '',
      breed: '',
      about: '',
      search: '',
    })
  }
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
}

const FormStyled = styled.form`
  text-align: left;
  width: 360px;
  margin: 0 auto 0 auto;
`

const InputStyled = styled.input`
  height: 32px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px 0 12px 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`
const LongInputStyled = styled.textarea`
  height: 80px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding-top: 12px;
  padding-left: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px 0 12px 0;
  background-color: #d8f7fc;
  color: #353b40;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`

const FormTextStyled = styled.p`
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  margin: 0 0 16px 0;
`

const TextStyled = styled.p`
  font-size: 12px;
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
`
