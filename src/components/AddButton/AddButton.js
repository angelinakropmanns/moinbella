import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

AddButton.propTypes = {
  children: PropTypes.string,
}

export default function AddButton({ children }) {
  return <ButtonStyled type="submit">{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  font-size: 12px;
  height: 32px;
  width: 92px;
  color: #414756;
  background: #ff9a8d;
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
