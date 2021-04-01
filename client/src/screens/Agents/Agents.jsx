import React from 'react'

export default function Agents(props) {
  const { agents } = props;
  return (
    <div>
      <h3>Agents</h3>
      {
        agents.map(agent => (
          <div  key={agent.id}>
            <h1 >{agent.name}</h1>
            <img src={agent.image_url} alt="profile picture" />
            <p>{ agent.speciality}</p>
          </div>
         
          
        ))
      }
    </div>
  )

}