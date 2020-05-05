import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Header from './components/Header'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import MapsPage from './pages/MapsPage'
import Navigation from './components/Navigation/Navigation'
import CreatePage from './pages/CreatePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/profiles">
          <Header />
          <ProfilePage />
          <Navigation />
        </Route>
        <Route exact path="/maps">
          <Header />
          <MapsPage />
          <Navigation />
        </Route>
        <Route exact path="/create">
          <Header />
          <CreatePage />
          <Navigation />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
