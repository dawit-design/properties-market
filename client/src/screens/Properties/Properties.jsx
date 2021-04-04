import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Properties.css'

export default function Properties(props) {
  const { properties} = props
  const [search, setSearch] = useState("");
  const [filterProperties, setFilterProperties] = useState([]);
  useEffect(() => {
    if (properties) {
      setFilterProperties(
        properties.filter((property) => {
         return property.city.toLowerCase().includes(search.toLowerCase())
       })
     )
   }
  },[search])

  return (
    <div className="property-container">
         <div className="search-box">
        <input
          className="search-box"
          type="text"
          autocomplete="on"
        placeholder="search-by-city"
        onChange={(e) => setSearch(e.target.value)}        
        />
      
      </div>
      <h1>These are available properties on the market right now</h1>
      {
        filterProperties.map(property => (
          <React.Fragment key={property.id}>
            <div className="image-container">
            <Link className="pro-img-container" to={`/properties/${property.id}`}>
              <img className="pro-img" src={property.image_url} alt="" />
              </Link>
              <h2>{property.city.toUpperCase()}</h2>
              </div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
