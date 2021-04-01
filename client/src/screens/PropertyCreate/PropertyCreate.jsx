import { useState } from 'react'

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { city, state, street_adress, image_url, year_bulit_in, price, description } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { city, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [city]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Sell your house without a realtors fee</h3>
      <label>
        City:
        <input
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
        />
      </label>
      <br/>
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
          name='year_bulit_it'
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
        <textarea
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
