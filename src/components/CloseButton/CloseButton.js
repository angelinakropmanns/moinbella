import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CloseButton.propTypes = {
  children: PropTypes.string,
}

export default function CloseButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  font-size: 14px;
  height: 28px;
  width: 120px;
  color: #414756;
  background: #64b7c4;
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
