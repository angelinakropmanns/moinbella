import React from 'react'
import profiles from '../../profiles.json'
import Profile from '../../components/Profile/Profile'
import Headline from '../../components/Headline/Headline'

export default function ProfilePage() {
  return (
    <main>
      <Headline>Eure neuen Freunde</Headline>
      <p>
        {profiles.map((profile) => (
          <Profile
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
        ))}
      </p>
    </main>
  )
}
