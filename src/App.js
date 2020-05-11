import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import StartPage from './pages/StartPage'
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
          <StartPage />
        </Route>
        <Route path="/profiles">
          <Header />
          <ProfilePage />
          <Navigation />
        </Route>
        <Route path="/maps">
          <Header />
          <MapsPage />
          <Navigation />
        </Route>
        <Route path="/create">
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
