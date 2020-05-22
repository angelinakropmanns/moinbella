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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 56px;
  width: 56px;
  color: var(--secondary);
  background: var(--primary);
  border-radius: 50%;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
