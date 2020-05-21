import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import styled from 'styled-components/macro'
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

  let filteredData = user.filter((profile) =>
    profile.plz.includes(searchResult)
  )

  return (
    <main>
      <Filter setSearchResult={setSearchResult} />
      <ProfileWrapper>
        {filteredData.length === 0 ? (
          <p>Es konnten leider keine passenden Profile gefunden werden.</p>
        ) : (
          <>
            {filteredData
              .slice()
              .sort((profileA, profileB) => profileA.name > profileB.name)
              .map((profile) => (
                <Profile
                  key={profile.id}
                  image={profile.image}
                  name={profile.name}
                  mail={profile.email}
                  plz={profile.plz}
                  city={profile.city}
                  gender={profile.gender}
                  breed={profile.breed}
                  about={profile.about}
                  search={profile.search}
                />
              ))}
          </>
        )}
      </ProfileWrapper>
    </main>
  )
}

const ProfileWrapper = styled.section`
  margin-top: 12px;
`
