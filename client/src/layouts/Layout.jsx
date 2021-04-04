import React from 'react';
import logo from "./Assets/logo1.png";
import logo2 from './Assets/logo2.png'
import { Link } from 'react-router-dom';
import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <header>
       
        <Link to="/landing">
          <img className="logo" src={logo2} alt="icon"/>
        </Link>
        {/* <Link to='/landing'><h1>Realtors-inc</h1></Link> */}
        
        {
          currentUser ?
            <>
              <p>Welcome, {currentUser.username.toUpperCase()}</p>
              
            </>
            :
            <>
              <Link to='/login'>Sign In</Link>
              <Link to='/Register'>Register</Link>
            </>
            
        }
      </header>
      <hr />
      {currentUser && (
        <div className="tab-container">
          <div className="li">
          <Link to='/properties'>Properties<i className="fa fa-home"></i> </Link>
          <Link to='/buy'>Buy</Link>
          <Link to='/rent'>Rent</Link>
          <Link to='/sell/new'>Sell</Link>
          <Link to='/agents'>Agents</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link onClick={handleLogout}>Sign Out</Link>
            <hr />
            </div>
        </div>
      )}
      {props.children}
    </div>
  )
}

