import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProperty} from '../../services/properties';
import Modal from '../../components/Modal'
import React from 'react'
import './PropertyDetail.css'

export default function PropertyDetail(props) {
  const [property, setProperty] = useState(null);
  const [open, handleOpen] = useState(false)
  const { id } = useParams();
  const { currentUser,handleDelete} =props;


  useEffect(() => {
    const fetchOneProperty = async () => {
      const property = await getOneProperty(id);
      setProperty(property);
    };
    fetchOneProperty();
  }, [id]);
 
  return (
    <div>
      {
        property &&
        <div>
          <h2>{property.city.toUpperCase()}, {property.state.toUpperCase()}</h2>
          <h3>{property.street_adress}</h3>
          <img key={property.id} src={property.image_url} alt="" />
          <h3>It was built in <span>{property.year_bulit_in}</span></h3>
          <h3>$: {property.price}</h3>
          <p>{property.description}</p>
          {
            // currentUser?.id === property.user_id &&
            <>
          <Link to={`/properties/${property.id}/edit`}> 
            <br/>
            <button>Edit</button></Link>
          <button onClick={() => handleOpen(property.id)}>delete</button>
          </>
          }
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
