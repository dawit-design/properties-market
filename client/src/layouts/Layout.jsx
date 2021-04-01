import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'><h1>Realtors-inc</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <Link to='/Register'>Register</Link>
            </>
            
        }
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to='/properties'>Properties</Link>
          <Link to='/sell/new'>Sell</Link>
          <Link to='/agents'>Agents</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  )
}
