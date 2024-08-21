import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/trips/${id}`);
        setTrip(response.data);
      } catch (error) {
        setError('Failed to load trip.');
      }
    };

    fetchTrip();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!trip) return <p>Loading...</p>;

  return (
    <div>
      <h1>{trip.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: trip.htmlContent }} />
    </div>
  );
};

export default TripDetail;
