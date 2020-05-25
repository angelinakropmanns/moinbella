import React, { useState, useEffect } from 'react'
import { db } from '../Firebase'
import styled from 'styled-components/macro'
import Profile from '../components/Profile'
import Filter from '../components/Filter'
import ButtonToTop from '../components/Buttons/ButtonToTop/ButtonToTop'
import RandomDogText from '../components/RandomDogText.js'

export default function ProfilePage({ user, setUser }) {
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
    // eslint-disable-next-line
  }, [])

  let filteredData =
    user && user.filter((profile) => profile.plz.includes(searchResult))

  return (
    <main>
      <div id="top" />
      <RandomDogText />
      <Filter setSearchResult={setSearchResult} />
      <ProfileWrapper>
        {filteredData.length === 0 ? (
          <p>Es konnten leider keine passenden Profile gefunden werden.</p>
        ) : (
          <>
            {filteredData
              .slice()
              .sort((profileA, profileB) =>
                profileA.name
                  .toLowerCase()
                  .localeCompare(profileB.name.toLowerCase())
              )
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
        <a href="#top">
          <ButtonToTopStyled>
            <ButtonToTop />
          </ButtonToTopStyled>
        </a>
      </ProfileWrapper>
    </main>
  )
}

const ProfileWrapper = styled.section`
  margin-top: 12px;
  margin-bottom: 40px;
`

const ButtonToTopStyled = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 4px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 20px;
`
