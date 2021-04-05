import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneProperty } from '../../services/properties';
import Modal from '../../components/Modal'
import React from 'react'
import './PropertyDetail.css'

export default function PropertyDetail(props) {
  const [property, setProperty] = useState(null);
  const [open, handleOpen] = useState(false)
  const { id } = useParams();
  const { currentUser, handleDelete } = props;


  useEffect(() => {
    const fetchOneProperty = async () => {
      const property = await getOneProperty(id);
      setProperty(property);
    };
    fetchOneProperty();
  }, [id]);

  return (
    <div className="property-container">
      {
        property &&
        <div className="detail-image-container">
          <img className="detail-pro-img" key={property.id} src={property.image_url} alt="" />

          <h2 className="detail-city">{property.city.toUpperCase()}, {property.state.toUpperCase()}</h2>
          <h5 className="detail-city">{property.street_adress}</h5>

          <h5 className="detail-city">It was built in <span>{property.year_bulit_in}</span></h5>
          <h5 className="detail-city">$: {property.price}</h5>
          <p className="detail-ptag">{property.description}</p>
          {
            // currentUser?.id === property.user_id &&
            <>
              <br />
              <div className="detail-button-container">
                <Link to={`/properties/${property.id}/edit`}>
                  <button className="detail-btn">Edit</button></Link>
                <button className="detail-btn" onClick={() => handleOpen(property.id)}>delete</button>
                <Link to='/contact' className="ask-tour-button"><button className="sign-in-btn">Ask Tour</button></Link>
                {open && (
                  <Modal
                    open={open}
                    handleOpen={handleOpen}
                    handleDelete={handleDelete}
                  />
                )}
              </div>

            </>
          }
        </div>
      }
    </div>

  )
}
