import React from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button/Button'

export default function Form() {
  return (
    <main>
      <FormStyled>
        <label htmlFor="name">Name*:</label>

        <StyledInput name="name" type="text" placeholder="Dein Name" />
        <label htmlFor="mail">E-Mail*:</label>

        <StyledInput
          name="mail"
          type="email"
          placeholder="Deine Mail-Adresse"
        />
        <label htmlFor="plz">Postleitzahl*:</label>

        <StyledInput name="plz" type="text" placeholder="Deine Postleitzahl" />

        <label htmlFor="city">Ort*:</label>

        <StyledInput
          name="city"
          type="text"
          placeholder="Der Ort, in dem du wohnst"
        />

        <label htmlFor="gender">Geschlecht deines Hundes*:</label>

        <StyledInput
          name="gender"
          type="text"
          placeholder="Geschlecht deines Hundes"
        />
        <label htmlFor="breed">Hunderasse*:</label>
        <StyledInput
          name="breed"
          type="text"
          placeholder="Die Rasse deines Hundes"
        />
        <label htmlFor="about">Über uns:</label>
        <StyledInputLong
          name="about"
          type="text"
          placeholder="Z.B. der Name deines Hundes, was ihr gerne macht..."
        />
        <label htmlFor="search">Wonach wir suchen:</label>
        <StyledInputLong
          name="search"
          placeholder="Wonach ihr sucht, z.B. regelmäßige Treffen..."
        />
        <Button>Los geht's!</Button>
      </FormStyled>
      <StyledText>*Pflichtfelder</StyledText>
    </main>
  )
}

const FormStyled = styled.form`
  text-align: left;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
`

const StyledInput = styled.input`
  height: 36px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: serif;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`
const StyledInputLong = styled.textarea`
  height: 80px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding-top: 12px;
  padding-left: 4px;
  font-family: serif;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #d8f7fc;
  color: #353b40;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`

const StyledText = styled.p`
  font-size: 12px;
`
