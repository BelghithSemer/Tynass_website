import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TripList = () => {
  const [trips, setTrips] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trips');
        const data = Array.isArray(response.data) ? response.data : []; // Ensure it's an array
        setTrips(data);
      } catch (err) {
        setError('Failed to fetch trips.'); // Set error message
        console.error('Error fetching trips:', err);
      } finally {
        setLoading(false); // Set loading to false after request is complete
      }
    };

    fetchTrips();
  }, []);

  if (loading) return <p>Loading...</p>; // Display loading message

  if (error) return <p>{error}</p>; // Display error message if there's an error

  return (
    <div>
      <h1>Trip List</h1>
      {trips.length > 0 ? (
        <ul>
          {trips.map(trip => (
            <li key={trip.id}>{trip.tynassTripName}</li> // Display trip names
          ))}
        </ul>
      ) : (
        <p>No trips available</p> // Message when no trips are available
      )}
    </div>
  );
};

export default TripList;
