import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ProfilePage from './pages/ProfilePage'
import MapsPage from './pages/MapsPage'
import Navigation from './components/Navigation/Navigation'
import CreateProfilePage from './pages/CreateProfilePage'
import CreatePlacePage from './pages/CreatePlacePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <ProfilePage />
          <Navigation />
        </Route>
        <Route path="/maps">
          <Header />
          <MapsPage />
          <Navigation />
        </Route>
        <Route path="/create-profile">
          <Header />
          <CreateProfilePage />
          <Navigation />
        </Route>
        <Route path="/create-place">
          <Header />
          <CreatePlacePage />
          <Navigation />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
