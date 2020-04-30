import React from 'react';
import styled from 'styled-components/macro';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
      <h1>Moin Bella!</h1>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  font: Malayalam Sangam MN;
  font-size: 21;
  color: #414756; 
  background-color: #AED6DC;
`


export default App;
