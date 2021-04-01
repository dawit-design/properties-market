import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getOneProperty } from '../services/properties'

import React from 'react'

export default function PropertyDetail(props) {
  const [propertyItem, setPropertyItem] = useState(nul);
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      const propertyData = await getOneProperty(id);
      setPropertyItem(propertyData);
    }
    fetchProperty()
  },[])

  return (
    <div>
      <img src={propertyItem.image_url} alt="" />
      <button>Ask Tour</button>
    </div>
  )
}
