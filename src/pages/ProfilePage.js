import React from 'react'
import styled from 'styled-components/macro'
import ProfileList from '../components/ProfileList'

export default function (){
    return (
        <>
        <HeadlineStyled>Eure neuen Freunde</HeadlineStyled>
        <ProfileList />
        </>
    )
}

const HeadlineStyled = styled.span`
    font-size: 23px;
`

