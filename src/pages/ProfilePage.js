import React from 'react'
import ProfileList from '../components/Profile/ProfileList'
import Headline from '../components/Headline/Headline'

export default function (onToggleProfile){
    return (
        <>
        <Headline>Eure neuen Freunde</Headline>
        <ProfileList onClick={onToggleProfile}/>
        </>
    )
}

