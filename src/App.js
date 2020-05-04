import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage'
import MapsIcon from './components/MapsIcon/MapsIcon'
import MapPage from './pages/MapPage'
import ProfileIcon from './components/ProfileIcon/ProfileIcon'

function App() {
  return (
      <Router>
      <Header />
      <Switch>
        <Route exact path="/profiles">
          <ProfilePage />
          <MapsIcon />
        </Route>
        <Route exact path="/maps">
          <MapPage />
          <ProfileIcon />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
