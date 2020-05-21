import React from 'react'
import { AuthConsumer } from './AuthContext'
import logo from '../img/logo.png'
import Header from '../components/Header'
import styled from 'styled-components/macro'

export default function UserHeader() {
  return (
    <AuthConsumer>
      {({ user, logout }) => (
        <section>
          {user.id ? (
            <>
              <HeaderStyled>
                <img src={logo} alt="moin bella" />
                <br />
                <p onClick={logout} data-cy="logout">
                  Logout
                </p>
              </HeaderStyled>
            </>
          ) : (
            <Header />
          )}
        </section>
      )}
    </AuthConsumer>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  img {
    max-height: 100%;
    width: auto;
    justify-self: center;
    margin-left: 8px;
  }
  p {
    margin-right: 8px;
    text-decoration: underline;
  }
`
