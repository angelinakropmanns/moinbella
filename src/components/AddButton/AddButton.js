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
  background: #c1e1e6;
  border-radius: 8px;
  border: 1px solid #414756;
`
