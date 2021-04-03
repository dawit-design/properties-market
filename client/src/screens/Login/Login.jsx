import { useState } from 'react';

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
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          autoComplete="on"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          autoComplete="on"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}