import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthProvider, { AuthConsumer } from './Auth/AuthContext'
import UserHeader from './Auth/UserHeader'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProfilePage from './pages/ProfilePage'
import UserProfile from './pages/UserProfile'
import MapsPage from './pages/MapsPage'
import Navigation from './components/Navigation/Navigation'
import CreatePlacePage from './pages/CreatePlacePage'

function App() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })
  const [user, setUser] = useState([])
  return (
    <AuthProvider setProfile={setProfile}>
      <AuthConsumer>
        {({ users }) => (
          <Switch>
            <Redirect exact from="/" to="profiles" />
            <Route path="/profiles">
              {users.id ? (
                <>
                  <UserHeader />
                  <ProfilePage user={user} setUser={setUser} />
                  <Navigation />
                </>
              ) : (
                <>
                  <SignIn profile={profile} setProfile={setProfile} />
                </>
              )}
            </Route>
            <Route path="/user-profile">
              {users.id ? (
                <>
                  <UserHeader />
                  <UserProfile user={user} setUser={setUser} />
                  <Navigation />
                </>
              ) : (
                <>
                  <SignIn profile={profile} setProfile={setProfile} />
                </>
              )}
            </Route>
            <Route path="/maps">
              {users.id ? (
                <>
                  <UserHeader />
                  <MapsPage />
                  <Navigation />
                </>
              ) : (
                <>
                  <SignIn profile={profile} setProfile={setProfile} />
                </>
              )}
            </Route>
            <Route path="/create-place">
              {users.id ? (
                <>
                  <UserHeader />
                  <CreatePlacePage />
                  <Navigation />
                </>
              ) : (
                <>
                  <SignIn profile={profile} setProfile={setProfile} />
                </>
              )}
            </Route>
            <Route exact path="/signup">
              <Header />
              <SignUp setProfile={setProfile} />
            </Route>
          </Switch>
        )}
      </AuthConsumer>
    </AuthProvider>
  )
}

export default App
