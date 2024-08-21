import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './TripInfo.css';
import ReactDOMServer from 'react-dom/server';
import Modal from './Modal';

const TripTemplate = ({ initialDetails, onDetailsChange, onSave }) => {
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
        // Get HTML content of the component
        const htmlContent = ReactDOMServer.renderToStaticMarkup(
          <div>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            <h2>Trip Info :</h2>
            <ul>
              <li>📜 Trip Language: {details.language}</li>
              <li>📍 Location: {details.location}</li>
              <li>🧑‍🤝‍🧑 Number of places in the trip: {details.numPlaces}</li>
              <li>💵 Price: {details.price}</li>
            </ul>
            <div className="buttons">
              <button>{details.contactButton}</button>
              <button style={{ background: '#FF1D58' }}>{details.packsButton}</button>
            </div>
            <p className="scroll-down">SCROLL DOWN FOR MORE ⬇️</p>
          </div>
        );

        // Send HTML content and trip name to the backend
        await axios.post('http://localhost:8080/api/trips', {
          tynassTripName: details.title, // Match the field name in your backend
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
    <div className="trip-info-container">
      <div className="trip-info-content" ref={templateRef}>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <h2>Trip Info :</h2>
        <ul>
          <li>📜 Trip Language: {details.language}</li>
          <li>📍 Location: {details.location}</li>
          <li>🧑‍🤝‍🧑 Number of places in the trip: {details.numPlaces}</li>
          <li>💵 Price: {details.price}</li>
        </ul>
        <div className="buttons">
          <button>{details.contactButton}</button>
          <button style={{ background: '#FF1D58' }}>{details.packsButton}</button>
        </div>
        <p className="scroll-down">SCROLL DOWN FOR MORE ⬇️</p>
        <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
      </div>
      <div className="trip-info-image">
        <img src={details.imageUrl} alt="Trip" />
      </div>
      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={details.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={details.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={details.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={details.language}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Places:
          <input
            type="number"
            name="numPlaces"
            value={details.numPlaces}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={details.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </label>
        <div className="buttons">
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </Modal>
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
    packsButton: PropTypes.string
  }).isRequired,
  onDetailsChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TripTemplate;
