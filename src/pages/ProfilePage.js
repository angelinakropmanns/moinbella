import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import Headline from '../components/Headline/Headline'
import Profile from '../components/Profile'
import Filter from '../components/Filter'

export default function ProfilePage() {
  const [user, setUser] = useState([])
  const [searchResult, setSearchResult] = useState('')

  useEffect(() => {
    const profiles = db.collection('users').onSnapshot((snapshot) => {
      const allUser = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setUser(allUser)
    })
    return () => {
      profiles()
    }
  }, [])

  return (
    <main>
      <Headline>Eure neuen Freunde</Headline>
      <Filter setSearchResult={setSearchResult} />
      <p>
        {user
          .filter(
            (profile) =>
              profile.name.includes(searchResult) ||
              profile.plz.includes(searchResult)
          )
          .map((profile) => (
            <Profile
              key={profile.id}
              image={profile.image}
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
