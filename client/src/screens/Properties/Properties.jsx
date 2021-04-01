import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export default function Properties(props) {
  const [open, handleOpen] = useState(false)
  const {properties, currentUser} = props

  return (
    <div>
      <h1>Homes</h1>
      {
        properties.map(property => (
          <React.Fragment key={property.id}>
            <Link to={`/properties/${property.id}`}><img src={property.image_url} alt=""/></Link>
            {
              currentUser?.id === property.user_id &&
              <>
                <Link to={`/properties/${property.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(property.id)}>delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
    </div>
  )
}
