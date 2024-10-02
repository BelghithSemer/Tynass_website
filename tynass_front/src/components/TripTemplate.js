/** 
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import Modal from './Modal';
import './TripInfo.css';

const TripTemplate = ({ initialDetails, onDetailsChange, onSave }) => {
  const [details, setDetails] = useState(initialDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialDetails.imageUrl);
  const templateRef = useRef(null);
  const [audioFiles, setAudioFiles] = useState({
    tunisian: null,
    french: null,
    english: null,
  });
  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          [`${event.target.name}Audio`]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ... (keep all the existing functions like handleChange, handleImageChange, etc.)
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
            
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                height: '50vh',
                padding: '10px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              <div style={{ flex: 1, paddingRight: '20px', marginLeft: '80px', textAlign: 'justify' }}>
    <h1 style={{ marginBottom: '25px' }}>{details.title}</h1>
    <p style={{ color: 'grey', marginBottom: '20px' }}>{details.description}</p>
    <h2 style={{ marginBottom: '25px' }}>Trip Info :</h2>
    <ul style={{ paddingRight: '20px', listStyleType: 'none', paddingLeft: '0' }}>
      <li style={{ color: 'grey', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>📜</span>
        Trip Language: {details.language}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>📍</span>
        Location: {details.location}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'grey', marginRight: '10px' }}>🧑‍🤝‍🧑</span>
        Number of places in the trip: {details.numPlaces}
      </li>
      <li style={{ color: 'grey', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
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
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={details.imageUrl} alt="Trip" style={{   maxWidth: '800px', maxHeight:'800px', width:'600px', height:'600px'}} />
  </div>
</div>

           
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
                  <img src="./tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src={ details.tunisianAudio } type="audio/mpeg" />
                  </audio>
                </div>
                <div>
                  <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src={ details.UKAudio } type="audio/mpeg" />
                  </audio>
                </div>
                <div>
                  <img src={'./french_flag.png'} alt="French Flag" style={{ width: '50px', height: '30px' }} />
                  <audio controls style={{ marginLeft: '10px' }}>
                    <source src={ details.FrenchAudio } type="audio/mpeg" />
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
      style={{   maxWidth: '400px', maxHeight:'400px', width:'600px', height:'600px'}}
    />
  </div>
  <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
      <div>
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
        
        
        

        <div>
          <h3>Audio Preview:</h3>
          <div>
          
            <img src="./tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.tunisianAudio} type="audio/mpeg" />
            </audio>
            <label style={{ display: 'block', marginBottom: '10px' }}>
          Upload Tunisian Audio:
          <input
            type="file"
            name="tunisian"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
          </div>
          <div>
          
            <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.UKAudio} type="audio/mpeg" />
            </audio>
            <label style={{ display: 'block', marginBottom: '10px' }}>
          Upload UK Audio:
          <input
            type="file"
            name="UK"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
          </div>
          <div>
          
            <img src="./french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.FrenchAudio} type="audio/mpeg" />
            </audio>
          </div>
          <label style={{ display: 'block', marginBottom: '10px' }}>
          Upload French Audio:
          <input
            type="file"
            name="French"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
        </div>

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
      <div>
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
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' , marginTop : ''
        }}>
          <div>
          <img src="./tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.tunisianAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.UKAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <img src="./french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.FrenchAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
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
  initialDetails: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    language: PropTypes.string,
    numPlaces: PropTypes.number,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
    contactButton: PropTypes.string,
    packsButton: PropTypes.string,
    audioFiles: PropTypes.shape({
      tunisian: PropTypes.string,
      french: PropTypes.string,
      english: PropTypes.string,
    }),
  }).isRequired,
  onDetailsChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TripTemplate;
*/

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from './Modal';
import './TripInfo.css';
import Forthsection from './Forthsection';

const TripTemplate = ({ initialDetails, onSave }) => {
  const [details, setDetails] = useState(initialDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialDetails.imageUrl);
  const templateRef = useRef(null);

  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          [`${event.target.name}Audio`]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setDetails((prevDetails) => ({
          ...prevDetails,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSave = async () => {
    try {
      
      console.log('Details',details);
      // Make API call to save the trip details
      const response = await axios.post('http://localhost:8080/trips/save', details);
      if (response.status === 200) {
        console.log(response);
        onSave(response.data); // Call onSave callback after successful save
        setIsEditing(false);
         // Exit editing mode
      }
    } catch (error) {
      console.error('Error saving trip:', error);
    }
  };

  const handlePlaceChange = (index, e) => {
    const newPlaces = [...details.adventurePlaces];
    newPlaces[index] = { ...newPlaces[index], [e.target.name]: e.target.value };
    setDetails({ ...details, adventurePlaces: newPlaces });
  };

  const handleAddPlace = () => {
    const newPlaces = [...details.adventurePlaces, { title: '', image: '' }];
    setDetails({ ...details, adventurePlaces: newPlaces });
  };

  const handleRemovePlace = (index) => {
    const newPlaces = details.adventurePlaces.filter((_, i) => i !== index);
    setDetails({ ...details, adventurePlaces: newPlaces });
  };

  const handleImagePlaceChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPlaces = [...details.adventurePlaces];
        newPlaces[index] = { ...newPlaces[index], imageUrl: reader.result };
        setDetails({ ...details, adventurePlaces: newPlaces });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleStoryChange = (index, event) => {
    const updatedStories = [...details.storys];
    updatedStories[index] = event.target.value;
    setDetails({ ...details, stories: updatedStories });
  };
  const handleVideoChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file); // Create a URL for the selected video
      const updatedStories = [...details.storys]; // Copy the current stories
      updatedStories[index] = videoUrl; // Replace the video at the specific index
      setDetails({ ...details, storys: updatedStories }); // Update the state
    }
  };
  
  const handleRemoveStory = (index) => {
    const updatedStories = details.storys.filter((_, i) => i !== index);
    setDetails({ ...details, stories: updatedStories });
  };
  const handleAddStory = () => {
    const newStory = {  };
    setDetails({ ...details, stories: [...details.storys, newStory] });
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
        Price: {details.price} DT per person
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
        Packs Details
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
      style={{   maxWidth: '400px', maxHeight:'400px', width:'600px', height:'600px'}}
    />
  </div>
  <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
      <div>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black'}}>
          Title:
          <input
            type="text"
            name="title"
            value={details.title}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Description:
          <textarea
            name="description"
            value={details.description}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey', width: '100%', height: '100px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Location:
          <input
            type="text"
            name="location"
            value={details.location}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Language:
          <input
            type="text"
            name="language"
            value={details.language}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Number of Places:
          <input
            type="number"
            name="numPlaces"
            value={details.numPlaces}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Price:
          <input
            type="text"
            name="price"
            value={details.price}
            onChange={handleChange}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
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
        
        
        

        <div>
          <h3>Audio Preview:</h3>
          <div>
          
            <img src="./tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.tunisianAudio} type="audio/mpeg" />
            </audio>
            <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Upload Tunisian Audio:
          <input
            type="file"
            name="tunisian"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
          </div>
          <div>
          
            <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.UKAudio} type="audio/mpeg" />
            </audio>
            <label style={{ display: 'block', marginBottom: '10px'  , color: 'black'}}>
          Upload UK Audio:
          <input
            type="file"
            name="UK"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
          </div>
          <div>
          
            <img src="./french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
            <audio controls style={{ marginLeft: '10px' }}>
              <source src={details.FrenchAudio} type="audio/mpeg" />
            </audio>
          </div>
          <label style={{ display: 'block', marginBottom: '10px' , color: 'black' }}>
          Upload French Audio:
          <input
            type="file"
            name="French"
            accept="audio/*"
            onChange={handleAudioChange}
            style={{ marginTop: '10px' }}
          />
        </label>
        </div>

        {/* Adventure Places Section */}
        <div>
          <h3 style={{ color: 'black', marginBottom:'20px' }}>Adventure Places:</h3>
          {details.adventurePlaces.map((place, index) => (
            <div key={index} style={{ marginBottom: '10px'  , color: 'black'}}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={place.title}
                  onChange={(e) => handlePlaceChange(index, e)}
                  style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid grey' }}
                />
              </label>
              <label style={{ marginLeft: '20px' , color: 'black' }}>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImagePlaceChange(index, e)}
                  style={{ marginLeft: '10px' }}
                />
                {place.image && (
                  <img
                    src={place.imageUrl}
                    alt="Adventure Place"
                    style={{ maxWidth: '100px', maxHeight: '100px', marginLeft: '10px' }}
                  />
                )}
              </label>
              <button type="button" onClick={() => handleRemovePlace(index)} style={{ marginLeft: '20px' , color: 'white' }}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddPlace} style={{ marginTop: '10px', color: 'white' }}>
            Add New Place
          </button>
        </div>

{/* Stories Section */}
<div>
  <h3 style={{ color: 'black', marginBottom: '20px' }}>Stories:</h3>
  {details.storys.map((story, index) => (
    <div key={index} style={{ marginBottom: '10px', color: 'black' }}>
      
      <label style={{ display: 'block', marginBottom: '10px', color: 'black' }}>
        Upload Story Video:
        <input 
          type="file" 
          accept="video/*" 
          onChange={(event) => handleVideoChange(index, event)} 
        />
      </label>
      <button type="button" onClick={() => handleRemoveStory(index)} style={{ marginLeft: '20px', color: 'white' }}>
        Remove
      </button>
    </div>
  ))}
  <button type="button" onClick={handleAddStory} style={{ marginTop: '10px', color: 'white' }}>
    Add New Story
  </button>
</div>


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
      <div>
  
  </div>
    </Modal>
</div>

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
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' , marginTop : ''
        }}>
          <div>
          <img src="/tunisien_flag.png" alt="Tunisian Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.tunisianAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <img src="./Bri_flag.png" alt="UK Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.UKAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <img src="./french_flag.png" alt="French Flag" style={{ width: '50px', height: '50px' }} />
          <audio controls style={{ marginLeft: '10px' }}>
            <source src={details.FrenchAudio || 'path_to_default_audio_file.mp3'} type="audio/mpeg" />
          </audio>
        </div>
        </div>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>EXPLORE THE ADVENTURE PLACES</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          { details.adventurePlaces.map((place, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img 
                src={ place.imageUrl } 
                //alt={ place.name }  
                style={{ width: '300px', height: '250px', maxHeight: '400px', maxWidth: '500px' }} 
              />
              <p>{place.title}</p>
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
    {details.storys.map((story, index) => (
      <div key={index} style={{ width: '250px', height: '450px', backgroundColor: '#333', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
        <video style={{ width: '100%', height: 'auto', borderRadius: '10px' }} autoPlay controls>
          <source src={story} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ fontWeight: 'bold' }}>AHMED BEY</p>
      </div>
    ))}
  </div>
</div>
{/* End Third Section */}
      {/* 4th */}
      <div>
      <Forthsection/>
    </div>
    </div>
  );
};

TripTemplate.propTypes = {
  initialDetails: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default TripTemplate;
