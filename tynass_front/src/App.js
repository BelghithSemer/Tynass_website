import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TripTemplate from './components/TripTemplate';
import TripsList from './components/TripList';
import TripDetail from './components/TripDetail';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [tripDetails, setTripDetails] = useState({
    title: 'THE OLD MEDINA FOUNDATION',
    description: 'Invites you to embark on an exceptional auto-guided journey...',
    location: 'Tunis',
    language: 'Multi',
    numPlaces: 15,
    price: '25DT per user',
    imageUrl: './logo512.png',
    contactButton: 'Contact Us',
    packsButton: 'Check Our Packs'
  });

  const handleDetailsChange = (updatedDetails) => {
    setTripDetails(updatedDetails);
  };

  const handleSave = (updatedDetails) => {
    // Handle the save action, e.g., send the updated details to a server or save locally
    console.log('Saved Details:', updatedDetails);
    // For example, you might want to make an API call to save the details
  };

  return (
    <AppContainer>
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/trips">Tynass Trips</Link>
          </nav>

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
            <Route path="/trips" element={<TripsList />} />
            <Route path="/trips/:id" element={<TripDetail />} />
          </Routes>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
