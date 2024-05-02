import React from 'react';
import { useParams } from 'react-router-dom';
import { propertiesData } from '../data/properties';

function PropertyDetailsPage() {
  const { id } = useParams();
  const property = propertiesData.find(property => property.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details">
      <div className="property-image">
        <img src={property.image} alt={property.name} />
      </div>
      <div className="property-info">
        <h2>{property.name}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Amenities:</strong> {property.amenities.join(', ')}</p>
      </div>
    </div>
  );
}

export default PropertyDetailsPage