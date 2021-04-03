import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProperty} from '../../services/properties';
import Modal from '../../components/Modal'

import React from 'react'

export default function PropertyDetail(props) {
  const [property, setProperty] = useState(null);
  const [open, handleOpen] = useState(false)
  const { id } = useParams();
  const { properties, handleDelete} =props;


  useEffect(() => {
    const fetchOneProperty = async () => {
      const property = await getOneProperty(id);
      setProperty(property);
    };
    fetchOneProperty();
  }, [id]);
 
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
          <Link to={`/properties/${property.id}/edit`}> 
            <br/>
            <button>Edit</button></Link>
      
          <button onClick={() => handleOpen(property.id)}>delete</button>
        </div>
        
             
      }

      <br />
      
      <Link to='/contact'><button>Ask Tour</button></Link>
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
      </div>
        
  )
}
