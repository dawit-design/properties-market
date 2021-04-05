import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Properties from '../../screens/Properties/Properties'
import PropertyCreate from '../../screens/PropertyCreate/PropertyCreate'
import PropertyDetail from '../../screens/PropertyDetail/PropertyDetail'
import PropertyEdit from '../../screens/PropertyEdit/PropertyEdit'
import Agents from '../../screens/Agents/Agents'
import About from '../../screens/About/About'
import Buy from '../../screens/Buy/Buy'
import Rent from '../../screens/Rent/Rent'
import Contact from '../../screens/Contact/Contact';
import LandingPage from '../../screens/LandingPage/Landingpage'
import { getAllAgents } from '../../services/agents';
import { getAllProperties,postProperty, putProperty, destroyProperty } from '../../services/properties';



export default function PropertyContainer(props) {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchProperties = async () => {
      const propertyData = await getAllProperties();
      setProperties(propertyData);
    }
    fetchProperties();
  },[])
  
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
  const handleUpdate = async (id, propertyData) => {
    const updatedProperty = await putProperty(id, propertyData);
    setProperties(prevState => prevState.map(property => {
      return property.id === Number(id) ? updatedProperty : property
    }))
    history.push('/properties');
  }

  const handleDelete = async (id) => {
    await destroyProperty(id);
    setProperties(prevState => prevState.filter(property => property.id !== id))
    history.push('/properties');
  }

  return (
    <Switch>
      <Route path='/properties/:id/edit'>
        <PropertyEdit
          properties={properties}
          handleUpdate={handleUpdate}
        />
      </Route>
       <Route path='/properties/:id'>
        <PropertyDetail
          properties={PropertyDetail}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/landing'>
        <LandingPage
          properties={properties}
        />
      </Route>
      <Route path='/properties'>
        <Properties
          properties={properties}
          
          currentUser={currentUser}
        />
      </Route>
      <Route path='/buy'>
        <Buy
          properties={properties}
        />
      </Route>
      <Route path='/rent'>
        <Rent
          properties={properties}
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
      <Route path="/contact">
            <Contact />
      </Route>
      <Route exact path="/about">
					<About />
				</Route>
        
    </Switch>
  )
}
