import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import SubmitButton from '../components/SubmitButton/SubmitButton'
import PropTypes from 'prop-types'

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignIn({ login, resetPassword, profile, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  return (
    <main>
      <WrapperStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="email">
            <label htmlFor="email">E-Mail:</label>
            <input
              ref={register({ required: true })}
              type="email"
              name="email"
              placeholder="Trage deine Mail-Adresse ein"
            />
            {errors.email && errors.email.type === 'notFound' && (
              <>
                <span>{errors.email.message}</span>
                <br />
              </>
            )}
          </section>
          <label htmlFor="password">Passwort:</label>
          <input
            ref={register({ required: true })}
            type="password"
            name="password"
            placeholder="Gib dein Passwort ein"
          />
          {errors.password && errors.password.type === 'reset' && (
            <span>
              {errors.password.message}
              <span onClick={handleReset}> setze dein Passwort zurück.</span>
            </span>
          )}
          <SubmitButtonStyled>
            <SubmitButton>Login</SubmitButton>
          </SubmitButtonStyled>
        </form>
      </WrapperStyled>
      <TextStyled>Du hast noch keinen Account?</TextStyled>
      <Link to="/signup">Klicke hier um dich zu registrieren</Link>
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

const WrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 80px 4px 20px 4px;
  text-align: left;
  input {
    height: 40px;
    width: 100%;
    border: 0;
    border-radius: 2px;
    padding: 4px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 100;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    background-color: #d8f7fc;
    color: #353b40;
  }

  .email {
    margin-bottom: 28px;
  }
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

const TextStyled = styled.p`
  margin-top: 80px;
`
