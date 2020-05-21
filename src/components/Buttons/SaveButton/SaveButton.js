import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SaveButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default function SaveButton({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  font-size: 14px;
  height: 24px;
  width: 80px;
  color: var(--secondary);
  background: var(--primary);
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
