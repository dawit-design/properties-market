import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

import React from 'react'

export default function PropertyDetail(props) {
  const [propertyItem, setPropertyItem] = useState(null);
  const { properties } = props;
  const { id } = useParams();

  useEffect(() => {
    if (properties.length) {
      const oneProperty = properties.find(property => property.id === Number(id));
      setPropertyItem(oneProperty)
    }
  }, [id])

  return (
    <div>
      {
        propertyItem ?(
        <div>
           <img src={propertyItem.image_url} alt="" />
      <button>Ask Tour</button>
          </div>
        ) : <h2>Loading . . .</h2>
      }
      </div>
        
  )
}
