import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import properties from './properties.css'

export default function Properties(props) {
  const [open, handleOpen] = useState(false)
  const {properties, currentUser} = props

  return (
    <div>
      <h1>Homes</h1>
      <p>These are available properties on the market right now</p>
      {
        properties.map(property => (
          <div key={property.id}>
            <div className="image-container">
            <Link className="pro-img" to={`/properties/${property.id}`}>
              <img src={property.image_url} alt="" />
              </Link>
              </div>
            {
              currentUser?.id === property.user_id &&
              <>
                <Link to={`/properties/${property.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(property.id)}>delete</button>
              </>
            }
          </div>
        ))
      }
    </div>
  )
}
