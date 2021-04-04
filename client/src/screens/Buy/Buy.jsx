import React from 'react'
import { Link } from 'react-router-dom'
import './Buy.css'
export default function Buy(props) {
  const { properties } = props
 
  return (
    <div>
      <h1>Buy a home you desire</h1>
      {
        properties.filter(item => (
          item.price > 10000
        )).map(property => (
          <React.Fragment key={property.id}>
            <div className="image-container">
            <Link to={`/properties/${property.id}`}>
            <img className="pro-img" src={property.image_url} alt=""/>
              </Link>
              <h2>{property.city.toUpperCase()},{property.state.toUpperCase()}</h2>
            </div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
