import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase'
import Headline from '../../components/Headline/Headline'
import Profile from '../../components/Profile/Profile'

export default function ProfilePage() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const profiles = db.collection('users').onSnapshot((snapshot) => {
      const allProfiles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setUser(allProfiles)
    })
    return () => {
      profiles()
    }
  }, [])

  return (
    <main>
      <Headline>Eure neuen Freunde</Headline>
      <p>
        {user.map((profile) => (
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
          />
        ))}
      </p>
    </main>
  )
}
