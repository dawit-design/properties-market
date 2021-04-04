import { useState } from 'react'
import './PropertiesCreate.css'

export default function PropertyCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { city, state, street_adress, image_url, year_bulit_in, price, description } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h1>Sell your house without a realtors fee</h1>
      <div className="form-container">
      <label>City:</label>   
        <input
            className="create-input"
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
        />
      <label>
          State:
          </label>
        <input
            className="create-input"
          type='text'
            name='state'
          value={state}
          onChange={handleChange}
        />
      <label>Street Adress: </label>
        <input
            className="create-input"
          type='text'
          name='street_adress'
          value={street_adress}
          onChange={handleChange}
        />
      <label>Image-Link:</label>
        <input
            className="create-input"
          type='text'
          name='image_url'
          value={image_url}
          onChange={handleChange}
        />
      <label>Year-Built-In:</label>
        <input
            className="create-input"
          type='text'
          name='year_bulit_it'
          value={year_bulit_in}
          onChange={handleChange}
        />
      <label> Price: </label>
        <input
            className="create-input"
          type='text'
          name='price'
          value={price}
          onChange={handleChange}
        />
      <label>Description: </label>
        <textarea
            className="create-input"
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
        <button className="create-button">Submit</button>
        </div>
    </form>
  )
}
