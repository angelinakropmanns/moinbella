import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SubmitButton.propTypes = {
  children: PropTypes.string,
}

export default function SubmitButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  font-size: 14px;
  height: 32px;
  width: 96px;
  background: var(--primary);
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
