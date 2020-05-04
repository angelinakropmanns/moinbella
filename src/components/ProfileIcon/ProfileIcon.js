import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import profilesicon from '../../img/profiles-icon.png'

export default function ProfileIcon() {
    return (
        <footer>
            <LinkStyled className="nav" activeClassName="selected" exact to="/profiles">
                <img src={profilesicon} alt=""/><br />
            </LinkStyled>
            <span>Zu den Profilen</span>
        </footer>
    )
}

const LinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px;
    line-height: 0.5;
    img {
        height: 32px;
        width: 32px;
    }`