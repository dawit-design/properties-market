import React from 'react'
import { Link } from 'react-router-dom'
import './Buy.css'
export default function Buy(props) {
  const { properties } = props
 
  return (
    <div>
      <h3>Buy a home you desire</h3>
      {
        properties.filter(item => (
          item.price > 10000
        )).map(property => (
          <React.Fragment key={property.id}>
            <Link to={`/properties/${property.id}`}>
              <h2>{property.city.toUpperCase()},{property.state.toUpperCase()}</h2>
            <img src={property.image_url} alt=""/>
            </Link>
            
          </React.Fragment>
        ))
      }
    </div>
  )
}
