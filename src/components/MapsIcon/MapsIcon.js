import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import mapsicon from '../../img/maps-icon.png'

export default function ProfileIcon() {
    return (
        <footer>
            <LinkStyled className="nav" activeClassName="selected" exact to="/maps">
                <img src={mapsicon} alt=""/><br />
            </LinkStyled>
            <span>
                Zu den Hundeplätzen
            </span>
        </footer>
    )
}

const LinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2px;
    font-size: 14px;
    line-height: 0.5;
    img {
        height: 28px;
        width: 28px;
    }` 
