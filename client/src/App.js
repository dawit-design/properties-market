
// package import
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
// components
import Container from './containers/Container/Container'
import Layout from './layouts/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Footer from "./components/Shared/Footer/Footer.jsx";


// function import

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/landing');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/landing');
  }
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (  
    <div className="App">
       <div className="content">
        <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
        >
        <Switch>
        <Route path='/login'>
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/'>
            <Container
              currentUser={currentUser}
            />
          </Route>
         
  
        </Switch>
          
        </Layout>
      </div>
      <Footer />
      </div>
  );
}

export default App;
