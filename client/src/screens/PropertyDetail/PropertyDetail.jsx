import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getOneProperty} from '../../services/properties';


import React from 'react'

export default function PropertyDetail(props) {
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  const { properties} =props;


  useEffect(() => {
    const fetchOneProperty = async () => {
      const property = await getOneProperty(id);
      console.log(property.city)
      setProperty(property);
    };
    fetchOneProperty();
  }, [id]);
  console.log(property)
  // useEffect(() => {
  //   if (properties.length) {
  //     const oneProperty = properties.find((property) => property.id === Number(id))
  //     console.log(oneProperty)
  //     setProperty(oneProperty);
  //   }
  // }, [property,id])


  return (
    <div>
      {
        property &&
        <div>
          <h2>{property.city}</h2>
          <img key={ property.id}src={property.image_url} alt="" />
          <button>Ask Tour</button>
        </div>
        
             
      }
      </div>
        
  )
}
