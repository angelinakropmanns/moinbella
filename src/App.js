import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
      <Router>
      <BodyStyled>
      <Header />
      <Switch>
        <Route exact path="/profiles">
          <ProfilePage />
        </Route>s
      </Switch>
      </BodyStyled>
      </Router>
  );
}

export default App;

const BodyStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
  text-align: center;
`