import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import SubmitButton from '../components/SubmitButton/SubmitButton'

export default function SignIn({ login, resetPassword, profile, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  return (
    <main>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          ref={register}
          type="email"
          name="email"
          placeholder="Trage deine Mail-Adresse ein"
          required
        />
        {errors.email && errors.email.type === 'notFound' && (
          <p>{errors.email.message}</p>
        )}
        <InputStyled
          ref={register}
          type="password"
          name="password"
          placeholder="Gib dein Passwort ein"
          required
        />
        {errors.password && errors.password.type === 'reset' && (
          <p>
            {errors.password.message}
            <div onClick={handleReset}> setze dein Passwort zurück</div>
          </p>
        )}
        <SubmitButtonStyled>
          <SubmitButton>Login</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
      <p>Du hast noch keinen Account?</p>
      <Link to="/signup">
        <p>Klicke hier um dich zu registrieren</p>
      </Link>
    </main>
  )

  function onSubmit(data) {
    setProfile(data)
    login(data).then((res) => {
      if (res.code === 'auth/user-not-found') {
        return setError(
          'email',
          'notFound',
          'Die eingegebene Mail-Adresse oder das eingegebene Passwort ist falsch. Bitte versuche es erneut.'
        )
      }
      if (res.code === 'auth/wrong-password') {
        return setError(
          'password',
          'reset',
          'Die eingegebene Mail-Adresse oder das eingegebene Passwort ist falsch. Bitte versuche es erneut oder '
        )
      }
    })
  }

  function handleReset() {
    swal({
      title: 'Passwort zurück gesetzt',
      text: 'Bitte überprüfe deine Mails.',
      icon: 'success',
    })
    resetPassword(profile)
  }
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
