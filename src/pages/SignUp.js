import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import SubmitButton from '../components/SubmitButton/SubmitButton'
import PropTypes from 'prop-types'

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignUp({ signUp, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()

  return (
    <main>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-Mail*:</label>
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
        <label htmlFor="password">Passwort*:</label>
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
      <LinkStyled to="/">
        <p>Zum Login</p>
      </LinkStyled>
    </main>
  )
  function onSubmit(data) {
    setProfile(data)
    signUp(data)
      .then((res) => {
        if (res.code === 'auth/email-already-in-use') {
          return setError(
            'email',
            'inUse',
            'Die eingegebene Mail-Adresse wird bereits genutzt.'
          )
        }
        setTimeout(history.pushState('/'), 3000)
      })
      .catch((error) => console.log(error))
    swal({
      title: 'Registrierung erfolgreich',
      text: 'Klicke auf "Zum Login" um neue Hundekontakte zu finden!',
      icon: 'success',
    })
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 80px 20px 20px 20px;
  text-align: left;
  label {
    color: #414756;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`

const InputStyled = styled.input`
  height: 40px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  color: #414756;
  background: #aed6dc;
  border: none;
  border-bottom: 1px solid #414756;
  margin-bottom: 28px;
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`

const TextStyled = styled.p`
  font-size: 12px;
  margin-bottom: 52px;
`

const LinkStyled = styled(Link)`
  color: #414756;
`
