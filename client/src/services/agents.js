import api from './api-config'

export const getAllAgents = async () => {
  const resp = await api.get('/agents')
  return resp.data;
}

// export const addAgent = async () => (propertyId, agentId) => {
//   const resp = await api.post(`/properties/${propertyId}/agents/${agentId}`)
//   return resp.data;
// }