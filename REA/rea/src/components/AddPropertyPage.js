import React, { useState } from 'react';
import properties from '../data/properties'; // Import the properties data

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new property object
    const newProperty = {
      id: properties.length + 1, // Generate a unique ID
      ...formData,
    };
    // Update the properties data
    properties.push(newProperty);
    // Reset form data
    setFormData({
      name: '',
      location: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      description: '',
      images: [],
    });
    // Show a confirmation message (optional)
    alert('Property added successfully!');
  };

  return (
    <div>
      <h1>Add New Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms:</label>
          <input type="number" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input type="number" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        {/* Button to submit the form */}
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
