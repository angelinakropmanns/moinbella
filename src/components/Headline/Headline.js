import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Headline.propTypes = {
    children: PropTypes.string,
  }

 
export default function Headline({children}) {
    return (
        <HeadlineStyled>{children}</HeadlineStyled>
    )
} 

const HeadlineStyled = styled.span`
    font-size: 21px;
    text-align: center;
    margin-top: 20px;
    margin-left: 5px;
    margin-bottom: 0;
`