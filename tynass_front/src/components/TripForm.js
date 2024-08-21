import React, { useState } from 'react';
import './TripForm.css'; // Add this file for your CSS styles

const TripForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    language: '',
    numPlaces: '',
    price: '',
    imageUrl: '',
    contactButton: '',
    packsButton: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="language">Language:</label>
        <input type="text" id="language" name="language" placeholder="Language" value={formData.language} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="numPlaces">Number of Places:</label>
        <input type="number" id="numPlaces" name="numPlaces" placeholder="Number of Places" value={formData.numPlaces} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="contactButton">Contact Button Text:</label>
        <input type="text" id="contactButton" name="contactButton" placeholder="Contact Button Text" value={formData.contactButton} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="packsButton">Packs Button Text:</label>
        <input type="text" id="packsButton" name="packsButton" placeholder="Packs Button Text" value={formData.packsButton} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default TripForm;
