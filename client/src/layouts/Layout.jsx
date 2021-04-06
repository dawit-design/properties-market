import React from 'react';
import logo2 from './Assets/logo2.png'
import { Link } from 'react-router-dom';
import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <header>

        <Link to="/landing">
          <img className="logo" src={logo2} alt="icon" />
        </Link>

        {
          currentUser ?
            <>

              <div className="tab-container">
                <div className="links-header">
                  <p className="layout-links">Welcome, {currentUser.username.toUpperCase()}</p>
                  <Link className="layout-links" to='/properties'>Home<i className="fa fa-home"></i> </Link>
                  <Link className="layout-links" to='/buy'>Buy</Link>
                  <Link className="layout-links" to='/rent'>Rent</Link>
                  <Link className="layout-links" to='/sell/new'>Sell</Link>
                  <Link className="layout-links" to='/agents'>Agents</Link>
                  <Link className="layout-links" to='/contact'>Contact</Link>
                  <Link className="layout-links" to='/about'>About</Link>
                  <Link className="layout-links" onClick={handleLogout}>Sign Out</Link>
                  <hr />
                </div>
              </div>

            </>
            :
            <div className="tab-container">
              <Link className="layout-links" to='/login'>Sign In</Link>
              <Link className="layout-links" to='/Register'>Register</Link>
            </div>

        }
      </header>
      <hr />
      {props.children}
    </div>
  )
}

