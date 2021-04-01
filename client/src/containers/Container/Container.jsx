import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Properties from '../../screens/Properties/Properties'
import PropertyCreate from '../../screens/PropertyCreate/PropertyCreate'
import Agents from '../../screens/Agents/Agents'

import { getAllAgents } from '../../services/agents';
import { getAllProperties, postProperty, putProperty, destroyProperty } from '../../services/properties';



export default function PropertyContainer(props) {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchProperties = async () => {
      const propertyData = await getAllProperties();
      console.log(propertyData)
      setProperties(propertyData);
    }
    fetchProperties();
  }, [])
  
  useEffect(() => {
    const fetchAgents = async () => {
      const agentData = await getAllAgents();
      setAgents(agentData);
    }
    fetchAgents();
  }, [])

  const handleCreate = async (propertyData) => {
    const newProperty = await postProperty(propertyData);
    setProperties(prevState => [...prevState, newProperty]);
    history.push('/properties');
  }

  const handleDelete = async (id) => {
    await destroyProperty(id);
    setProperties(prevState => prevState.filter(property => property.id !== id))
  }

  return (
    <Switch>
      <Route path='/properties'>
        <Properties
          properties={properties}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/agents'>
        <Agents
          agents={agents}
        />
      </Route>
      <Route path='/sell/new'>
        <PropertyCreate
          handleCreate={handleCreate}
        />
      </Route>
    </Switch>
  )
}
