import React from 'react'

export default function Agents(props) {
  const { agents } = props;
  return (
    <div>
      <h3>Agents</h3>
      {
        agents.map(agent => (
          <p key={agent.id}>{agent.name}</p>
        ))
      }
    </div>
  )

}