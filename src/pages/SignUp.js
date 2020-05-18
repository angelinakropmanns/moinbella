import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import SubmitButton from '../components/SubmitButton/SubmitButton'

export default function SignUp({ signUp, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()

  function onSubmit(data) {
    setProfile(data)
    signUp(data).then((res) => {
      if (res.code === 'auth/email-already-in-use') {
        return setError(
          'email',
          'inUse',
          'Die eingegebene Mail-Adresse wird bereits genutzt.'
        )
      }
      setTimeout(history.pushState('/'), 3000)
    })
  }
  return (
    <main>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          ref={register({ required: true })}
          type="email"
          name="email"
          placeholder="Trage deine Mail-Adresse ein"
        />
        {errors.email && errors.email.type === 'required' && (
          <p>Bitte gib eine gültige Mail-Adresse an.</p>
        )}
        {errors.email && errors.email.type === 'inUse' && (
          <p>{errors.email.message}</p>
        )}
        <InputStyled
          ref={register({ required: true, minLength: 8 })}
          type="password"
          name="password"
          placeholder="Gib ein Passwort mit mindestens 8 Zeichen ein"
        />
        {errors.password && (
          <p>Das Passwort muss mindestens 8 Zeichen beinhalten.</p>
        )}
        <SubmitButtonStyled>
          <SubmitButton>Registrieren</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
      <p>Du hast bereits einen Account?</p>
      <Link to="/">
        <p>Klicke hier um dich einzuloggen</p>
      </Link>
    </main>
  )
}

const FormStyled = styled.form`
  text-align: left;
  margin-top: 20px;
  width: 100%;
  p {
    margin-top: 32px;
    line-height: 0;
  }
  label {
    margin-left: 4px;
  }
`

const InputStyled = styled.input`
  height: 36px;
  width: 98%;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px auto 12px 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
`

const TextStyled = styled.p`
  font-size: 12px;
`
