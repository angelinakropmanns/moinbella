import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

UploadButton.propTypes = {
  children: PropTypes.string,
}

export default function UploadButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  color: var(--secondary);
  font-size: 12px;
  height: 20px;
  width: 80px;
  background: var(--primary);
  border-radius: 8px;
  border: 28px;
  box-shadow: 0px 0px 4px 0.5px rgba(0, 0, 0, 0.5);
`
