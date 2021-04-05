import React from 'react';
import './About.css'


export default function About() {
  return (
  
    <div className="body">
      <Header />
      <Card
        className='section'
        title='About the Company' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.'
      />
      <Card 
                className='section bg-grey'
                title='Our Values'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section'
                title='Our Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
    </div>
  )
}
const Header = () =>{
  return(
    
      <div className='header'>
          <span className='header-title'>
             <h1> Realtors-inc</h1>
          </span>
          <br/>
          <span className="header-text">
              <h3>The best way to buy real estate.</h3>
              
          </span>
      </div>
  );
}

const Card = (props) =>{
  return (
    <div className="body-section">
      <div className={props.className} >
          <div className="small-div">
              <i className={props.className}></i>
              <img src={props.img} alt=''/>
          </div>

          <div className="big-div">
              <span className='div-title'>
                  {props.title}
              </span>
              <br/>
              <span>
                  {props.description}
              </span>
          </div>
      </div>
  </div>
  )
}




