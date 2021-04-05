import React from 'react'
import './Agents.css'


export default function Agents(props) {
  const { agents } = props;
  return (
    <div className="container">
      <div className="heading">
      <h1>Agents</h1>
      </div>
    <div className="profile-card">
        
      {
        agents.map(agent => (
          <div className="agent-profile" key={agent.id}>
           
            <img className="profile-images" src={agent.image_url} alt="profile picture" />
            <h3 >{agent.name.toUpperCase()}</h3>
            <h4>{agent.office_location}</h4>
            <h3 className="speciality">{agent.speciality}</h3>
            <p className="about-agent">{agent.about}</p>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                </ul>
          </div>
         
          
        ))
      }
      </div>
    </div>  
  )

}