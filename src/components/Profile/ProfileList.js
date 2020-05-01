import React, {useState} from 'react'
import userData from '../../profiles.json'
import Profile from './Profile'

export default function (){
    const [profiles, setProfiles] = useState(userData)

    return (
        <>
        <p>{profiles.map(
            (profile) => (
                <Profile 
                onClick={() => toggleProfile(profile)}
                key={profile.id}
                name={profile.name}
                mail={profile.mail}
                plz={profile.plz}
                city={profile.city}
                gender={profile.gender}
                breed={profile.breed}
                about={profile.about}
                search={profile.search}
                isHidden={profile.isHidden}
                />
            )
        )}</p>
        </>
    )

    function toggleProfile(profile) {
        const index = profiles.indexOf(profile)

        setProfiles([
            ...profiles.slice(0, index),
            {...profile, isHidden: !profile.isHidden},
            ...profiles.slice(index + 1),
        ])
    }
}