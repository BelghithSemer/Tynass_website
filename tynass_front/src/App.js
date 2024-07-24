import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
