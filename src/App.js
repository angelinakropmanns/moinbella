import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthProvider, { AuthConsumer } from './Auth/AuthContext'
import useServices from './Hooks/useServices'
import Header from './components/Header'
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
                    <Header />
                    <ProfilePage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <Header />
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
                    <Header />
                    <MapsPage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <Header />
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
                    <Header />
                    <CreateProfilePage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <Header />
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
                    <Header />
                    <CreatePlacePage />
                    <Navigation />
                  </>
                ) : (
                  <>
                    <Header />
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
                <Header />
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
