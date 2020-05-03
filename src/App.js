import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
      <Router>
      <Header />
      <Switch>
        <Route exact path="/profiles">
          <ProfilePage />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
