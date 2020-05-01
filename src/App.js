import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import styled from 'styled-components/macro'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <div className="App">
      <BodyStyled>
      <Header />
      <Switch>
        <Route exact path="/profiles">
          <ProfilePage />
        </Route>
      </Switch>
      </BodyStyled>
    </div>
  );
}

export default App;

const BodyStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
`