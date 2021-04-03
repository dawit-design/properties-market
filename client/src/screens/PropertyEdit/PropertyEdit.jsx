import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react'

export default function PropertyEdit(props) {
  const [formData, setFormData] = useState({
    city: '',
    state: '',
    street_adress: '',
    image_url: '',
    year_bulit_in: '',
    price: '',
    description: '',
  })
  const { city, state, street_adress, image_url, year_bulit_in, price, description } = formData;
  const { id } = useParams();
  const { properties, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const propertyItem = properties.find(property => property.id === Number(id));
      setFormData({
        city: propertyItem.city,
        state: propertyItem.state,
        street_adress: propertyItem.street_adress,
        image_url: propertyItem.image_url,
        year_bulit_in: propertyItem.year_bulit_in,
        price: propertyItem.price,
        description: propertyItem.description,
      })
    }
    if (properties.length) {
      prefillFormData()
    }
  }, [properties, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ 
      ...prevState,
      [name]:value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Make changes to property</h3>
      <label>
        City:
        <input
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type='text'
          name='state'
          value={state}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street Adress:
        <input
          type='text'
          name='street_adress'
          value={street_adress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image-url:
        <input
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Year-Built-In:
        <input
          type='text'
          name='year_bulit_in'
          value={year_bulit_in}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type='text'
          name='price'
          value={price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
    </form>
  )
}
