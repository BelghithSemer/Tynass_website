import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';


const SecondSectionDetails = ({ initialDetails, onDetailsChange, onSave }) => {
  const [details, setDetails] = useState(initialDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialDetails.imageUrl);
  const templateRef = useRef(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setDetails(prevDetails => ({
          ...prevDetails,
          imageUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      if (templateRef.current) {
        const htmlContent = ReactDOMServer.renderToStaticMarkup(
          <div>
            {/* New section */}
            <div
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Immerse beyond History</h2>
              <p style={{ textAlign: 'center', marginBottom: '20px' }}>LISTEN TO OUR AUDIO EXAMPLES</p>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <div>
                  <img src="./tunisien-flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src="/path/to/tunisian-audio.mp3" type="audio/mpeg" />
                  </audio>
                </div>
                <div>
                  <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src="/path/to/uk-audio.mp3" type="audio/mpeg" />
                  </audio>
                </div>
                <div>
                  <img src={'./french_flag.png'} alt="French Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src="/path/to/french-audio.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginBottom: '20px' }}>EXPLORE THE ADVENTURE PLACES</p>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="./beb_bhar.png" alt="Beb Bhar" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>BEB BHAR</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./zytouna_street.png" alt="Zytouna Street" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ZYTOUNA STREET</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./zitouna_mosquee.png" alt="Zitouna Mosque" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ZITOUNA MOSQUE</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./attarin_market.png" alt="Attarin Market" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ATTARIN MARKET</p>
          </div>
        </div>
            </div>
          </div>
        );

        // Send HTML content and trip name to the backend
        await axios.post('http://localhost:8080/api/trips', {
          tynassTripName: details.title,
          htmlContent
        });
        
        alert('HTML content and trip name saved successfully!');
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error saving HTML content:', error);
      alert('Failed to save HTML content');
    }
  };

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
    ref={templateRef}
    style={{ flex: 1, paddingRight: '20px', marginLeft: '80px', textAlign: 'justify' }}
  >
    <h1 style={{ marginBottom: '25px' }}>{details.title}</h1>
    <p style={{ color: 'grey', marginBottom: '20px' }}>{details.description}</p>
    <h2 style={{ marginBottom: '35px' }}>Trip Info :</h2>
    <ul style={{ paddingRight: '20px', listStyleType: 'none', paddingLeft: '0' }}>
      <li style={{ color: 'grey', marginBottom: '10px' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>📜</span>
        Trip Language: {details.language}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>📍</span>
        Location: {details.location}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>🧑‍🤝‍🧑</span>
        Number of places in the trip: {details.numPlaces}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>💵</span>
        Price: {details.price}
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
        {details.contactButton}
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
        {details.packsButton}
      </button>
    </div>
    <p style={{ fontSize: '1em', marginTop: '20px', color: 'grey' }}>SCROLL DOWN FOR MORE ⬇️</p>
    <button
      type="button"
      onClick={() => setIsEditing(true)}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1em',
        borderRadius: '5px',
        marginTop: '20px',
      }}
    >
      Edit
    </button>
  </div>
  <div
    
    style={{ flex: 1, display: 'flex' }}
  >
    <img
      src={details.imageUrl}
      alt="Trip"
      style={{   maxWidth: '800px', maxHeight:'800px', width:'600px', height:'600px'}}
    />
  </div>
  <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
    <div >
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Title:
        <input
          type="text"
          name="title"
          value={details.title}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Description:
        <textarea
          name="description"
          value={details.description}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey', width: '100%', height: '100px' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Location:
        <input
          type="text"
          name="location"
          value={details.location}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Language:
        <input
          type="text"
          name="language"
          value={details.language}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Number of Places:
        <input
          type="number"
          name="numPlaces"
          value={details.numPlaces}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Price:
        <input
          type="text"
          name="price"
          value={details.price}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Image URL:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: '10px' }}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }}
          />
        )}
      </label>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <button
          type="button"
          onClick={handleSave}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1em',
            borderRadius: '5px',
          }}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          style={{
            backgroundColor: '#FF1D58',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1em',
            borderRadius: '5px',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>
</div>

      {/* Render the new section */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Immerse beyond History</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>LISTEN TO OUR AUDIO EXAMPLES</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' , marginTop : '20px'
        }}>
          <div>
            <img src={"./tunisien_flag.png"} alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src="./tunisien_flag.png" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src="/path/to/uk-audio.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <img src="./french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src="/path/to/french-audio.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>EXPLORE THE ADVENTURE PLACES</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="./beb_bhar.png" alt="Beb Bhar" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>BEB BHAR</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./zytouna_street.png" alt="Zytouna Street" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ZYTOUNA STREET</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./zitouna_mosquee.png" alt="Zitouna Mosque" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ZITOUNA MOSQUE</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="./attarin_market.png" alt="Attarin Market" style={{ width: '300px', height: '250px',maxHeight: '400px', maxWidth: '500px' }} />
            <p>ATTARIN MARKET</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

TripTemplate.propTypes = {
  // ... (keep the existing propTypes)
};

export default TripTemplate;