import React from 'react'
import Profile from './Profile'
import profiles from '../../profiles.json'

export default function (){
    
    return (
        <>
        <p>{profiles.map(
            (profile) => (
                <Profile key={profile.id}
                name={profile.name}
                mail={profile.mail}
                plz={profile.plz}
                city={profile.city}
                gender={profile.gender}
                rasse={profile.rasse}
                about={profile.about}
                search={profile.search} />
            )
        )}</p>
        </>
    )
}