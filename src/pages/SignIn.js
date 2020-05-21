import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import useSignIn from '../components/Hooks/useSignIn'
import swal from 'sweetalert'
import logo from '../img/logo.png'
import SubmitButton from '../components/Buttons/SubmitButton/SubmitButton'
import PropTypes from 'prop-types'

SignIn.propTypes = {
  profile: PropTypes.object.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignIn({ profile, setProfile }) {
  const { login, resetPassword } = useSignIn()
  const { register, handleSubmit, errors, setError } = useForm()

  return (
    <SignInPageStyled>
      <LogoStyled src={logo} alt="moin bella" />
      <FormStyled onSubmit={handleSubmit(onSubmit)} data-cy="signin_form">
        <label htmlFor="email">E-Mail:</label>
        <InputStyled
          ref={register({ required: true })}
          type="email"
          name="email"
          placeholder="Trage deine Mail-Adresse ein"
          data-cy="mail_input"
        />
        {errors.email && errors.email.type === 'notFound' && (
          <>
            <Error>{errors.email.message}</Error>
            <br />
          </>
        )}
        <label htmlFor="password">Passwort:</label>
        <InputStyled
          ref={register({ required: true })}
          type="password"
          name="password"
          placeholder="Gib dein Passwort ein"
          data-cy="password_input"
        />
        {errors.password && errors.password.type === 'reset' && (
          <Error>
            {errors.password.message}
            <ResetErrorStyled onClick={handleReset}>
              {' '}
              setze dein Passwort zurück.
            </ResetErrorStyled>
          </Error>
        )}
        <SubmitButtonStyled>
          <SubmitButton>Login</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <ResetStyled onClick={handleReset}>Neues Passwort anfordern</ResetStyled>
      <TextStyled>Du hast noch keinen Account?</TextStyled>
      <LinkStyled to="/signup">Klicke hier um dich zu registrieren</LinkStyled>
    </SignInPageStyled>
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

const SignInPageStyled = styled.section`
  grid-row: 1/4;
  overflow: scroll;
  margin: 12px 4px;
  height: 100%;
`
const LogoStyled = styled.img`
  width: 72%;
  height: auto;
  margin-top: 20px;
`
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
  button:focus {
    outline: 0;
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
  margin-top: 40px;
`

const LinkStyled = styled(Link)`
  color: #414756;
`

const Error = styled.p`
  margin: 0 0 20px 0;
  color: red;
  font-size: 14px;
`
const ResetStyled = styled.p`
  text-decoration: underline;
  font-size: 14px;
  margin-top: 28px;
`
const ResetErrorStyled = styled.span`
  text-decoration: underline;
`
