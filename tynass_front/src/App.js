import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TripTemplate from './components/TripTemplate';
import TripsList from './components/TripList';
import TripDetail from './components/TripDetail';
import styled from 'styled-components';
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Home/Header';
const AppContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;

`;

function App() {
  const [tripDetails, setTripDetails] = useState({
    title: 'THE OLD MEDINA FOUNDATION',
    description: 'Invites you to embark on an exceptional auto-guided journey...',
    location: 'Tunis',
    language: 'Multi',
    numberOfPlaces: 15,
    price: 25,
    imageUrl: '/tynasstripone.png',
    
    /// second section 
    tunisianAudio: '',
    englishAudio:'',
    frenchAudio:'',
    adventurePlaces: [
      { title: 'Zitouna Mosque', imageUrl: '/zitouna_mosquee.png' },
      { title: 'Zitouna Street', imageUrl: '/zytouna_street.png' },
      { title: 'Beb Bhar', imageUrl: '/beb_bhar.png' },
      { title: 'Attarin market', imageUrl: '/attarin_market.png' }
    ],
    storys : [
      "/assets/video.mp4",
      "/assets/video.mp4",
      "/assets/video.mp4",
      "/assets/video.mp4"
    ]


  });

  const handleDetailsChange = (updatedDetails) => {
    setTripDetails(updatedDetails);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const handleSave = (updatedDetails) => {
    // Handle the save action, e.g., send the updated details to a server or save locally
    console.log('Saved Details:', updatedDetails);
    // For example, you might want to make an API call to save the details
  };

  return (
    <AppContainer>
      <Router>
        <div>
        
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route
              path="/"
              element={
                <TripTemplate
                  initialDetails={tripDetails}
                  onDetailsChange={handleDetailsChange}
                  onSave={handleSave}
                />
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/trips" element={<TripsList />} />
            <Route path="/trips/:id" element={<TripDetail />} />
          </Routes>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
