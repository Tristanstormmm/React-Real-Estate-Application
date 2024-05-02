import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import properties from '../data/properties'; // Importing the properties data

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const filterProperties = (property) => {
    // Filter by location
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    // Filter by price range
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-');
      const propertyPrice = property.price;
      if ((minPrice && propertyPrice < parseInt(minPrice, 10)) || (maxPrice && propertyPrice > parseInt(maxPrice, 10))) {
        return false;
      }
    }

    // Filter by bedrooms
    if (bedrooms && property.bedrooms !== parseInt(bedrooms, 10)) {
      return false;
    }

    return true;
  };

  return (
    <div className="home-page">
      <h1>Welcome to Our Property Listings</h1>
      
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price range (e.g., $100,000-$300,000)"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
      </div>
      
      {/* Property list */}
      <div className="property-list">
        {/* Filtered properties */}
        {properties.filter(filterProperties).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
