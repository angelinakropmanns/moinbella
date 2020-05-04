import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Headline.propTypes = {
  children: PropTypes.string,
}

export default function Headline({ children }) {
  return <HeadlineStyled>{children}</HeadlineStyled>
}

const HeadlineStyled = styled.span`
  font-size: 20px;
  margin-bottom: 0;
`
