import React from 'react';
import "./LandingPage.css"
import './Assets/apt.jpeg'
import './Assets/house.jpeg'
import './Assets/house2.jpeg'


export default function LandingPage() {
  return (
    <div className="body">
      <Header />
      <Card
        className='section'
        img='./apt.jpeg'
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
                img='./house.jpeg' 
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
                img='./house2.jpeg' 
                title='Our Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
      <ContactContainer/>
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
  return(
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
  )
}



const ContactContainer = () => {
  return(
      <div className='contact-container bg-grey'>
          <span className="div-title">Contact us</span>
          <div className='contact-form'>
              <div id='sect1'>
          <span>
            Contact us and we will get back to you within 24 hours.
            </span>
          <br/>
                  <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Somerville,MA
                  </span>
          <br/>
                  <span>
                      <i className="fas fa-mobile-alt"></i>
                      +123 456 7890
                  </span>
          <br/>
                  <span>
                      <i className="far fa-envelope"></i>
                      realtors-inc@gmail.com
                  </span>
              </div>
                  
              <div id='sect2'>
                 
          
                  <input type="text" placeholder="Full Name" className="input-field"/>
                  <br/>
          <span>
                      Contact: 
                  </span>
          <input type="text" placeholder="email address" className="input-field" /> <br />   
          <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
          <br/>        
          <button className="contact-btn">Send</button>
              </div>
          </div>
      </div>
  );

}

