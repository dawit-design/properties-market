import { useState } from 'react';
import './Login.css'
export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
      <div className="login-cont">
      <h1>Sign In</h1>
      <label>
          Username:
        <input
            className="sign-in-input"
          type='text'
          name='username'
          autoComplete="on"
            value={username}
            required
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          Password:
        <input
             className="sign-in-input"
          type='password'
          name='password'
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
        <button className="sign-in-btn">Sign in</button>
        </div>
    </form>
  )
}