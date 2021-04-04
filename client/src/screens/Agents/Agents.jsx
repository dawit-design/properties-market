import React from 'react'
import './Agents.css'
import banner from "../img/images/bg-img.jpeg"

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
            <h1 >{agent.name}</h1>
            <img className="profile-images" src={agent.image_url} alt="profile picture" />
            <p className="speciality">{ agent.speciality}</p>
          </div>
         
          
        ))
      }
      </div>
    </div>  
  )

}