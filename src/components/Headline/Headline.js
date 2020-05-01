import React from 'react'
import styled from 'styled-components/macro'
 
export default function Headline({children}) {
    return (
        <HeadlineStyled>{children}</HeadlineStyled>
    )
} 


const HeadlineStyled = styled.span`
    font-size: 21px;
    margin-top: 20px;
    margin-left: 5px;
    margin-bottom: 0;
`