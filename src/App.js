import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthProvider, { AuthConsumer } from './Auth/AuthContext'
import useServices from './Hooks/useServices'
import UserHeader from './Auth/UserHeader'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProfilePage from './pages/ProfilePage'
import MapsPage from './pages/MapsPage'
import Navigation from './components/Navigation/Navigation'
import CreateProfilePage from './pages/CreateProfilePage'
import CreatePlacePage from './pages/CreatePlacePage'

function App() {
  const { signUp, login, resetPassword, profile, setProfile } = useServices()

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
                    <UserHeader />
                    <SignIn
                      profile={profile}
                      setProfile={setProfile}
                      login={login}
                      resetPassword={resetPassword}
                    />
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
                    <UserHeader />
                    <SignIn
                      profile={profile}
                      setProfile={setProfile}
                      login={login}
                      resetPassword={resetPassword}
                    />
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
                    <UserHeader />
                    <SignIn
                      profile={profile}
                      setProfile={setProfile}
                      login={login}
                      resetPassword={resetPassword}
                    />
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
                    <UserHeader />
                    <SignIn
                      profile={profile}
                      setProfile={setProfile}
                      login={login}
                      resetPassword={resetPassword}
                    />
                  </>
                )}
              </Route>
              <Route exact path="/signup">
                <UserHeader />
                <SignUp signUp={signUp} setProfile={setProfile} />
              </Route>
            </Switch>
          )}
        </AuthConsumer>
      </AuthProvider>
    </Router>
  )
}

export default App
