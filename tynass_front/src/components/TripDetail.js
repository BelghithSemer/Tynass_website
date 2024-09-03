import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './TripInfo.css';


const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trips/show/${id}`);
        console.log(response.data);
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
      <div
        className="trip-info-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          className="trip-info-content"
          style={{ flex: 1, paddingRight: '20px', marginLeft: '80px', textAlign: 'justify' }}
        >
          <h1 style={{ marginBottom: '25px' }}>{trip.title}</h1>
          <p style={{ color: 'grey', marginBottom: '20px' }}>{trip.description}</p>
          <h2 style={{ marginBottom: '35px' }}>Trip Info:</h2>
          <ul style={{ paddingRight: '20px', listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ color: 'grey', marginBottom: '10px' }}>
              <span style={{ color: 'grey', marginRight: '10px' }}>📜</span>
              Trip Language: {trip.language}
            </li>
            <li style={{ color: 'grey', marginBottom: '10px' }}>
              <span style={{ color: 'grey', marginRight: '10px' }}>📍</span>
              Location: {trip.location}
            </li>
            <li style={{ color: 'grey', marginBottom: '10px' }}>
              <span style={{ color: 'grey', marginRight: '10px' }}>🧑‍🤝‍🧑</span>
              Number of Places in the Trip: {trip.numberOfPlaces}
            </li>
            <li style={{ color: 'grey', marginBottom: '10px' }}>
              <span style={{ color: 'grey', marginRight: '10px' }}>💵</span>
              Price: {trip.price}
            </li>
          </ul>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px', marginBottom: '20px', width: '100%' }}>
            <button
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2em',
                borderRadius: '5px',
              }}
            >
              Contact
            </button>
            <button
              style={{
                backgroundColor: '#FF1D58',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2em',
                borderRadius: '5px',
              }}
            >
              Pack Details
            </button>
          </div>
          <p style={{ fontSize: '1em', marginTop: '20px', color: 'grey' }}>SCROLL DOWN FOR MORE ⬇️</p>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
          <img
            src={ trip.imageUrl }
            alt="Trip"
            style={{ maxWidth: '400px', maxHeight: '400px', width: '600px', height: '600px' }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Immerse Beyond History</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>LISTEN TO OUR AUDIO EXAMPLES</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div>
            <img src="/tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={ trip.tunisianAudio } type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <img src="/Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={ trip.englishAudio } type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <img src="/french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={ trip.frenchAudio } type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>EXPLORE THE ADVENTURE PLACES</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          { trip.adventurePlaces.map((place, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img 
                src={ place.imageUrl } 
                alt={ place.title }  
                style={{ width: '300px', height: '250px', maxHeight: '400px', maxWidth: '500px' }} 
              />
              <p>{ place.title }</p>
            </div>
          ))}
        </div>
      </div>



      {/* Third Section  */}
<div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center' }}>
  <div style={{ marginBottom: '20px' }}>
    <h1 style={{ fontSize: '24px', margin: '0' }}>EMBRACE THE FUTURE :</h1>
    <h2 style={{ fontSize: '20px', margin: '0' }}>AUGMENTED REALITY AS THE</h2>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>ULTIMATE STORYTELLING MEDIUM</h2>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
    {trip.storys.map((story, index) => (
      <div key={index} style={{ width: '250px', height: '450px', backgroundColor: '#333', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
        <video style={{ width: '100%', height: 'auto', borderRadius: '10px' }} autoplay loop muted>
          <source src={story} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ fontWeight: 'bold' }}>AHMED BEY</p>
      </div>
    ))}
  </div>
</div>
{/* End Third Section */}
    </div>
  );
};

export default TripDetail;
