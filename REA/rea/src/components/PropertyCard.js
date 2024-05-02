import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <Link to={`/property/${property.id}`}> {/* Navigate to the property details page */}
        <img src={property.image} alt={property.name} />
        <div className="property-card-content">
          <h2 className="property-card-title">{property.name}</h2>
          <div className="property-card-info">
            <p className="property-card-info-item property-card-location">{property.location}</p>
            <p className="property-card-info-item property-card-price">{property.price}</p>
          </div>
        </div>
        <span className="property-card-link">
          View Details
        </span>
      </Link>
    </div>
  );
}

export default PropertyCard;

