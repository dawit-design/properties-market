import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    
    <form className="register-container" onSubmit={(e)=>{
      e.preventDefault();
      handleRegister(formData);
    }}>
      <div className="sign-up-form">
      <h1>Register</h1>
      <label>
          Username:
        <input
            className="form-input"
          type='text'
          name='username'
          value={username}
            onChange={handleChange}
            required
        />
      </label>
      <br />
      <label>
          Email:
        <input
            className="form-input"
          type='text'
          name='email'
          value={email}
            onChange={handleChange}
            required
        />
      </label>
      <br />
      <label>
          Password:
        <input
            className="form-input"
          type='password'
          name='password'
          value={password}
            onChange={handleChange}
            required
        />
      </label>
      <br />
        <button className='sign-up-button'>Submit</button>
        </div> 
      </form>
      
  )
}
