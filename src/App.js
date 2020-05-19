import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
import CreateProfilePage from './pages/CreateProfilePage'
import CreatePlacePage from './pages/CreatePlacePage'

function App() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })
  return (
    <Router>
      <AuthProvider setProfile={setProfile}>
        <AuthConsumer>
          {({ user }) => (
            <Switch>
              <Redirect exact from="/" to="profiles" />
              <Route path="/profiles">
                {user.id ? (
                  <>
                    <UserHeader />
                    <ProfilePage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <SignIn profile={profile} setProfile={setProfile} />
                  </>
                )}
              </Route>
              <Route path="/user-profile">
                {user.id ? (
                  <>
                    <UserHeader />
                    <UserProfile />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <SignIn profile={profile} setProfile={setProfile} />
                  </>
                )}
              </Route>
              <Route path="/maps">
                {user.id ? (
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
              <Route path="/create-profile">
                {user.id ? (
                  <>
                    <UserHeader />
                    <CreateProfilePage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <SignIn profile={profile} setProfile={setProfile} />
                  </>
                )}
              </Route>
              <Route path="/create-place">
                {user.id ? (
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
    </Router>
  )
}

export default App
