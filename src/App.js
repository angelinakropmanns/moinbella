import React from 'react';
import './App.css';
import styled from 'styled-components/macro'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <div className="App">
      <BodyStyled>
      <GlobalStyles />
      <Header />
      <ProfilePage />
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