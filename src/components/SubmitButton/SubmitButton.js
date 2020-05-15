import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SubmitButton.propTypes = {
  children: PropTypes.string,
}

export default function SubmitButton({ children }) {
  return <ButtonStyled type="submit">{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  color: #414756;
  font-size: 14px;
  height: 28px;
  width: 96px;
  background: #ff9a8d;
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
