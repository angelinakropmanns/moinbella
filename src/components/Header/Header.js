import React from 'react'
import styled from 'styled-components/macro'
import logo from '../../img/Logo.png'

export default function Header () {
    return (
        <HeaderStyled>
        <img src={logo} alt="Moin Bella!"/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.section`
    item-align: center;
`